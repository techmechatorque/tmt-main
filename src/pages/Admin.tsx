// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { supabase } from "@/integrations/supabase/client";
// import { Button } from "@/components/ui/button";
// import { useToast } from "@/hooks/use-toast";
// import { User } from "@supabase/supabase-js";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { LogOut, Zap } from "lucide-react";
// import { Link } from "react-router-dom";
// import InternManagement from "@/components/admin/InternManagement";
// import EmployeeManagement from "@/components/admin/EmployeeManagement";

// const Admin = () => {
//   const navigate = useNavigate();
//   const { toast } = useToast();
//   const [user, setUser] = useState<User | null>(null);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     checkAuth();

//     const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
//       if (!session) {
//         navigate("/auth");
//       } else {
//         setUser(session.user);
//         checkAdminRole(session.user.id);
//       }
//     });

//     return () => subscription.unsubscribe();
//   }, [navigate]);

//   const checkAuth = async () => {
//     const { data: { session } } = await supabase.auth.getSession();
    
//     if (!session) {
//       navigate("/auth");
//       return;
//     }

//     setUser(session.user);
//     await checkAdminRole(session.user.id);
//   };

//   const checkAdminRole = async (userId: string) => {
//     try {
//       const { data, error } = await supabase
//         .from("user_roles")
//         .select("role")
//         .eq("user_id", userId)
//         .eq("role", "admin")
//         .maybeSingle();

//       if (error) throw error;

//       setIsAdmin(!!data);
      
//       if (!data) {
//         toast({
//           title: "Access Denied",
//           description: "You don't have admin permissions.",
//           variant: "destructive",
//         });
//         navigate("/");
//       }
//     } catch (error) {
//       console.error("Error checking admin role:", error);
//       toast({
//         title: "Error",
//         description: "Failed to verify admin permissions.",
//         variant: "destructive",
//       });
//       navigate("/");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSignOut = async () => {
//     await supabase.auth.signOut();
//     navigate("/");
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
//           <p className="text-muted-foreground">Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!isAdmin) {
//     return null;
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <header className="border-b">
//         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//           <Link to="/" className="flex items-center gap-3 group">
//             <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center group-hover:scale-105 transition-transform">
//               <Zap className="w-6 h-6 text-white" />
//             </div>
//             <div>
//               <div className="font-bold text-lg">TechMecha</div>
//               <div className="text-xs text-primary-light font-semibold -mt-1">Torque Admin</div>
//             </div>
//           </Link>
//           <div className="flex items-center gap-4">
//             <span className="text-sm text-muted-foreground">{user?.email}</span>
//             <Button onClick={handleSignOut} variant="outline" size="sm">
//               <LogOut className="w-4 h-4 mr-2" />
//               Sign Out
//             </Button>
//           </div>
//         </div>
//       </header>

//       <main className="container mx-auto px-6 py-8">
//         <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
//         <Tabs defaultValue="interns" className="w-full">
//           <TabsList>
//             <TabsTrigger value="interns">Interns</TabsTrigger>
//             <TabsTrigger value="employees">Employees</TabsTrigger>
//           </TabsList>
          
//           <TabsContent value="interns">
//             <InternManagement />
//           </TabsContent>
          
//           <TabsContent value="employees">
//             <EmployeeManagement />
//           </TabsContent>
//         </Tabs>
//       </main>
//     </div>
//   );
// };

// export default Admin;
