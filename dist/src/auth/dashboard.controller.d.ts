import { AuthService } from './auth.service';
export declare class DashboardController {
    private authService;
    constructor(authService: AuthService);
    getDashboardData(req: any): Promise<{
        metrics: {
            title: string;
            value: string;
            icon: string;
            color: string;
        }[];
        recentActivities: any[];
        upcomingTasks: any[];
        projectStatusData: any[];
        donationTrendData: any[];
    }>;
}
