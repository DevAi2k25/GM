// Mock data utilities for GamersMarket
// Note: Per guidelines, this should only be used for demonstration when explicitly requested

export interface MockUser {
  id: number;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  joinDate: string;
  stats: {
    orders: number;
    reviews: number;
    wishlistItems: number;
    totalSpent: number;
  };
}

export interface MockOrder {
  id: string;
  userId: number;
  items: Array<{
    productId: number;
    productName: string;
    quantity: number;
    price: string;
    imageUrl?: string;
  }>;
  total: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  orderDate: string;
  estimatedDelivery?: string;
  trackingNumber?: string;
}

export interface MockReview {
  id: number;
  userId: number;
  productId: number;
  productName: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  verified: boolean;
  helpful: number;
}

// Mock user for demonstration purposes
export const mockCurrentUser: MockUser = {
  id: 1,
  username: "demogamer",
  email: "demo@gamersmarket.com",
  firstName: "Demo",
  lastName: "Gamer",
  joinDate: "January 2024",
  stats: {
    orders: 12,
    reviews: 8,
    wishlistItems: 15,
    totalSpent: 1249.99
  }
};

// Mock recent orders
export const mockRecentOrders: MockOrder[] = [
  {
    id: "GM001234",
    userId: 1,
    items: [
      {
        productId: 1,
        productName: "Corsair K95 RGB Platinum XT",
        quantity: 1,
        price: "149.99",
        imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3"
      },
      {
        productId: 3,
        productName: "Logitech G Pro X Superlight",
        quantity: 1,
        price: "89.99",
        imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46"
      }
    ],
    total: "239.98",
    status: "delivered",
    orderDate: "2024-12-15",
    trackingNumber: "GM1234567890"
  },
  {
    id: "GM001233",
    userId: 1,
    items: [
      {
        productId: 2,
        productName: "SteelSeries Arctis Pro Wireless",
        quantity: 1,
        price: "329.99",
        imageUrl: "https://images.unsplash.com/photo-1583394838336-acd977736f90"
      }
    ],
    total: "329.99",
    status: "shipped",
    orderDate: "2024-12-10",
    estimatedDelivery: "2024-12-18",
    trackingNumber: "GM1234567891"
  }
];

// Mock reviews
export const mockUserReviews: MockReview[] = [
  {
    id: 1,
    userId: 1,
    productId: 1,
    productName: "Corsair K95 RGB Platinum XT",
    rating: 5,
    title: "Excellent gaming keyboard!",
    content: "Amazing quality and performance! The RGB lighting is stunning and the mechanical switches feel great. Highly recommended for serious gamers.",
    date: "2024-12-13",
    verified: true,
    helpful: 8
  },
  {
    id: 2,
    userId: 1,
    productId: 3,
    productName: "Logitech G Pro X Superlight",
    rating: 4,
    title: "Great mouse for competitive gaming",
    content: "Super lightweight and responsive. Perfect for FPS games. Only complaint is the battery life could be better.",
    date: "2024-12-08",
    verified: true,
    helpful: 5
  }
];

// Mock activity feed
export const mockActivityFeed = [
  {
    id: 1,
    type: "review",
    description: "Left a review for Corsair K95 RGB",
    date: "2 days ago",
    icon: "star",
    color: "teal"
  },
  {
    id: 2,
    type: "wishlist",
    description: "Added Gaming Chair Pro to wishlist",
    date: "1 week ago",
    icon: "heart",
    color: "pink"
  },
  {
    id: 3,
    type: "order",
    description: "Order #GM001234 delivered",
    date: "1 week ago",
    icon: "package",
    color: "green"
  },
  {
    id: 4,
    type: "purchase",
    description: "Purchased SteelSeries Arctis Pro Wireless",
    date: "2 weeks ago",
    icon: "shopping-cart",
    color: "blue"
  }
];

// Utility functions for working with mock data
export const getMockUserById = (id: number): MockUser | undefined => {
  return id === 1 ? mockCurrentUser : undefined;
};

export const getMockOrdersByUserId = (userId: number): MockOrder[] => {
  return mockRecentOrders.filter(order => order.userId === userId);
};

export const getMockReviewsByUserId = (userId: number): MockReview[] => {
  return mockUserReviews.filter(review => review.userId === userId);
};

export const formatOrderStatus = (status: MockOrder['status']): { label: string; color: string } => {
  const statusMap = {
    pending: { label: 'Pending', color: 'yellow' },
    processing: { label: 'Processing', color: 'blue' },
    shipped: { label: 'Shipped', color: 'purple' },
    delivered: { label: 'Delivered', color: 'green' },
    cancelled: { label: 'Cancelled', color: 'red' }
  };
  return statusMap[status] || { label: 'Unknown', color: 'gray' };
};

export const calculateOrderTotal = (items: MockOrder['items']): number => {
  return items.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);
};

// Export all mock data as a single object for easy importing
export const mockData = {
  user: mockCurrentUser,
  orders: mockRecentOrders,
  reviews: mockUserReviews,
  activity: mockActivityFeed
};
