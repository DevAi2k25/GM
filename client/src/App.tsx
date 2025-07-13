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
import Checkout from "@/pages/checkout";
import OrderConfirmation from "@/pages/order-confirmation";
import Profile from "@/pages/profile";
import Auth from "@/pages/auth";
import SellerDashboard from "@/pages/seller-dashboard";
import AuthVerification from "@/pages/auth-verification";
import AuthenticationService from "@/pages/authentication-service";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Terms from "@/pages/terms";
import Privacy from "@/pages/privacy";
import Routes from "@/pages/routes";
import GamingNews from "@/pages/gaming-news";
import CommunityForums from "@/pages/community-forums";
import LiveStreams from "@/pages/live-streams";
import Tournaments from "@/pages/tournaments";
import Leaderboards from "@/pages/leaderboards";
import MarketplaceAnalytics from "@/pages/marketplace-analytics";
import Wallet from "@/pages/wallet";
import Favourites from "@/pages/favourites";
import TrackOrder from "@/pages/track-order";
import ViewStore from "@/pages/view-store";
import HelpSupport from "@/pages/help-support";
import NotFound from "@/pages/not-found";
import NewArrivals from "@/pages/new-arrivals";
import BestSellers from "@/pages/best-sellers";
import Deals from "@/pages/deals";
import Community from "@/pages/community";
import Settings from "@/pages/settings";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Routes} />
      <Route path="/home" component={Home} />
      <Route path="/category/:slug" component={Category} />
      <Route path="/product/:id" component={Product} />
      <Route path="/search" component={Search} />
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/order-confirmation" component={OrderConfirmation} />
      <Route path="/profile" component={Profile} />
      <Route path="/auth" component={Auth} />
      <Route path="/seller-dashboard" component={SellerDashboard} />
      <Route path="/auth-verification" component={AuthVerification} />
      <Route path="/authentication-service" component={AuthenticationService} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/routes" component={Routes} />
      <Route path="/gaming-news" component={GamingNews} />
      <Route path="/community-forums" component={CommunityForums} />
      <Route path="/live-streams" component={LiveStreams} />
      <Route path="/tournaments" component={Tournaments} />
      <Route path="/leaderboards" component={Leaderboards} />
      <Route path="/marketplace-analytics" component={MarketplaceAnalytics} />
      <Route path="/wallet" component={Wallet} />
      <Route path="/favourites" component={Favourites} />
      <Route path="/track-order" component={TrackOrder} />
      <Route path="/view-store" component={ViewStore} />
      <Route path="/help-support" component={HelpSupport} />
      <Route path="/new-arrivals" component={NewArrivals} />
      <Route path="/best-sellers" component={BestSellers} />
      <Route path="/deals" component={Deals} />
      <Route path="/community" component={Community} />
      <Route path="/settings" component={Settings} />
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
