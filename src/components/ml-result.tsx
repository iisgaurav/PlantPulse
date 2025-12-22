import { MLPrediction } from "@/lib/types";

interface MLResultProps {
  data: MLPrediction;
}

export default function MLResult({ data }: MLResultProps) {
  const isHealthy = data.disease.toLowerCase().includes("healthy");

  return (
    <div className="mt-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="glass-card rounded-3xl overflow-hidden">
        {/* Header */}
        <div
          className={`p-8 ${
            isHealthy
              ? "gradient-bg"
              : "bg-gradient-to-r from-red-500 to-orange-500"
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            {isHealthy ? (
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            ) : (
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
            )}
            <div className="text-center">
              <p className="text-white/80 text-sm font-medium uppercase tracking-wider">
                Analysis Result
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {isHealthy ? "Plant is Healthy!" : "Disease Detected"}
              </h2>
            </div>
          </div>

          {/* Confidence Badge */}
          {data.confidence && (
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur">
                <span className="text-white/80 text-sm">Confidence:</span>
                <span className="text-white font-bold text-lg">
                  {data.confidence}%
                </span>
                <div className="w-20 h-2 bg-white/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full transition-all duration-1000"
                    style={{ width: `${data.confidence}%` }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Plant & Disease Info */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="glass-card rounded-2xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Plant Species
                </span>
              </div>
              <p className="text-2xl font-bold gradient-text">{data.plant}</p>
            </div>

            <div className="glass-card rounded-2xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isHealthy ? "bg-success/10" : "bg-destructive/10"
                  }`}
                >
                  <svg
                    className={`w-6 h-6 ${
                      isHealthy ? "text-success" : "text-destructive"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Health Status
                </span>
              </div>
              <p
                className={`text-2xl font-bold ${
                  isHealthy ? "text-success" : "text-destructive"
                }`}
              >
                {data.disease}
              </p>
            </div>
          </div>

          {/* Message or Treatment */}
          {isHealthy ? (
            <div className="text-center glass-card rounded-2xl p-8 gradient-nature">
              <div className="w-20 h-20 mx-auto rounded-2xl gradient-bg flex items-center justify-center mb-4 shadow-xl">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Congratulations!</h3>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Your plant is thriving! Keep up the excellent care and continue
                providing proper sunlight, water, and nutrients.
              </p>
            </div>
          ) : (
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Treatment & Prevention</h3>
                  <p className="text-sm text-muted-foreground">
                    Follow these recommendations to help your plant recover
                  </p>
                </div>
              </div>
              <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
                <p className="text-foreground leading-relaxed">{data.remedy}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
