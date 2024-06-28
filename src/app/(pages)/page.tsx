import Image from "next/image";
import Link from "next/link";
import { ResponsiveLine } from "@nivo/line";
import Card from "@common/card";
import ArrowRightIcon from "components/ui/icons/ArrowRightIcon";
import Chart from "@common/chart";

export default function Home() {
  return (
    <main className="flex-1 bg-muted">
      <section className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">채권 개요</h2>
            <p className="text-muted-foreground">
              최신 채권 시장 동향과 수익률에 대한 최신 정보를 제공합니다.
            </p>
          </div>
          <Card title="최">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium">10-Year Treasury</h3>
                <p className="text-2xl font-bold">3.75%</p>
                <p className="text-muted-foreground text-sm">
                  +0.25% from last week
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Corporate Bonds</h3>
                <p className="text-2xl font-bold">4.25%</p>
                <p className="text-muted-foreground text-sm">
                  -0.10% from last week
                </p>
              </div>
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              prefetch={false}
            >
              View Bond Research
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Card>
          <Card title="Market Trends">
            <Chart></Chart>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              prefetch={false}
            >
              Explore Bond Market
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Card>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Stock Overview</h2>
            <p className="text-muted-foreground">
              Get a quick look at the stock market and access your trading
              dashboard.
            </p>
          </div>
          <Card title="Market Summary">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium">S&P 500</h3>
                <p className="text-2xl font-bold">4,200.88</p>
                <p className="text-muted-foreground text-sm">
                  +1.2% from last week
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">NASDAQ</h3>
                <p className="text-2xl font-bold">12,800.41</p>
                <p className="text-muted-foreground text-sm">
                  +2.5% from last week
                </p>
              </div>
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              prefetch={false}
            >
              View Stock Dashboard
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Card>
          <Card title="Top Movers">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium">Apple Inc.</h3>
                <p className="text-2xl font-bold">$125.50</p>
                <p className="text-muted-foreground text-sm">+3.2% today</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Tesla Inc.</h3>
                <p className="text-2xl font-bold">$280.75</p>
                <p className="text-muted-foreground text-sm">-1.5% today</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Amazon.com</h3>
                <p className="text-2xl font-bold">$105.25</p>
                <p className="text-muted-foreground text-sm">+2.8% today</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Microsoft Corp.</h3>
                <p className="text-2xl font-bold">$280.50</p>
                <p className="text-muted-foreground text-sm">+1.1% today</p>
              </div>
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              prefetch={false}
            >
              Explore Stocks
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Card>
        </div>
      </section>
    </main>
  );
}
