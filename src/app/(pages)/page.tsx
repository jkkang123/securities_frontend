import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-gray-100 dark:bg-gray-950 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Optimize Your Portfolio
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">
                Get personalized recommendations for better performing stocks
                and bonds.
              </p>
            </div>
            <div className="flex justify-center">
              {/* <img
                src="/placeholder.svg"
                width="500"
                height="400"
                alt="Hero Image"
                className="rounded-lg"
                style="aspect-ratio: 500 / 400; object-fit: cover;"
              /> */}
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center">
              Input Your Current Portfolio
            </h2>
            <form className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="asset-name"
                  >
                    Asset Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="asset-name"
                    placeholder="e.g. Apple Inc."
                  />
                </div>
                <div>
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="asset-amount"
                  >
                    Amount Invested
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="asset-amount"
                    placeholder="e.g. 10000"
                    type="number"
                  />
                </div>
              </div>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                type="submit"
              >
                Analyze Portfolio
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 dark:bg-gray-950 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center">
              Recommended Investments
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 space-y-2"
                data-v0-t="card"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Apple Inc.</h3>
                  <span className="text-gray-500 dark:text-gray-400">
                    $125.50
                  </span>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Projected 12-month return: 15%
                </p>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                  Invest
                </button>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 space-y-2"
                data-v0-t="card"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Microsoft Corp.</h3>
                  <span className="text-gray-500 dark:text-gray-400">
                    $280.75
                  </span>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Projected 12-month return: 12%
                </p>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                  Invest
                </button>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 space-y-2"
                data-v0-t="card"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">
                    Vanguard Total Bond Market ETF
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">
                    $80.25
                  </span>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Projected 12-month return: 6%
                </p>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                  Invest
                </button>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 space-y-2"
                data-v0-t="card"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Invesco QQQ Trust</h3>
                  <span className="text-gray-500 dark:text-gray-400">
                    $350.00
                  </span>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Projected 12-month return: 18%
                </p>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                  Invest
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center">
              Learn About Investing
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 space-y-2"
                data-v0-t="card"
              >
                <h3 className="text-lg font-medium">Stocks 101</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Understand the basics of investing in stocks, including how to
                  research and evaluate companies.
                </p>
                <a className="text-primary-500 hover:underline" href="#">
                  Read More
                </a>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 space-y-2"
                data-v0-t="card"
              >
                <h3 className="text-lg font-medium">Bonds Explained</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Learn about the different types of bonds, their risks and
                  returns, and how they can diversify your portfolio.
                </p>
                <a className="text-primary-500 hover:underline" href="#">
                  Read More
                </a>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 space-y-2"
                data-v0-t="card"
              >
                <h3 className="text-lg font-medium">
                  Portfolio Diversification
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Discover the importance of diversifying your investments and
                  strategies to manage risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
