import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Category from "@/pages/category";
import Product from "@/pages/product";
import Search from "@/pages/search";
import Cart from "@/pages/cart";
import Profile from "@/pages/profile";
import Auth from "@/pages/auth";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/category/:slug" component={Category} />
      <Route path="/product/:id" component={Product} />
      <Route path="/search" component={Search} />
      <Route path="/cart" component={Cart} />
      <Route path="/profile" component={Profile} />
      <Route path="/auth" component={Auth} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen gm-background gm-text-primary">
          <Toaster />
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
