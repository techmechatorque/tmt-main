import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2 } from "lucide-react";
import { z } from "zod";

const internSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email").max(255),
  department: z.string().max(100).optional(),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
});

type Intern = {
  id: string;
  name: string;
  email: string;
  department: string | null;
  start_date: string | null;
  end_date: string | null;
  status: string;
};

const InternManagement = () => {
  const { toast } = useToast();
  const [interns, setInterns] = useState<Intern[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    start_date: "",
    end_date: "",
  });

  useEffect(() => {
    fetchInterns();

    // Subscribe to realtime changes
    const channel = supabase
      .channel("interns-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "interns",
        },
        () => {
          fetchInterns();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchInterns = async () => {
    try {
      const { data, error } = await supabase
        .from("interns")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setInterns(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      internSchema.parse(formData);

      const { error } = await supabase.from("interns").insert([
        {
          name: formData.name,
          email: formData.email,
          department: formData.department || null,
          start_date: formData.start_date || null,
          end_date: formData.end_date || null,
        },
      ]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Intern added successfully",
      });

      setFormData({
        name: "",
        email: "",
        department: "",
        start_date: "",
        end_date: "",
      });
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      }
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase.from("interns").delete().eq("id", id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Intern removed successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Add New Intern</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <Input
                placeholder="Department"
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              />
              <Input
                type="date"
                placeholder="Start Date"
                value={formData.start_date}
                onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
              />
              <Input
                type="date"
                placeholder="End Date"
                value={formData.end_date}
                onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
              />
            </div>
            <Button type="submit">
              <Plus className="w-4 h-4 mr-2" />
              Add Intern
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Interns List ({interns.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {interns.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">No interns added yet</p>
            ) : (
              interns.map((intern) => (
                <div
                  key={intern.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold">{intern.name}</h4>
                    <p className="text-sm text-muted-foreground">{intern.email}</p>
                    {intern.department && (
                      <p className="text-sm text-muted-foreground">{intern.department}</p>
                    )}
                    {intern.start_date && (
                      <p className="text-xs text-muted-foreground">
                        {new Date(intern.start_date).toLocaleDateString()} -{" "}
                        {intern.end_date
                          ? new Date(intern.end_date).toLocaleDateString()
                          : "Present"}
                      </p>
                    )}
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(intern.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InternManagement;
