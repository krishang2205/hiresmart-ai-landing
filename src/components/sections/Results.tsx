import Reveal from "@/components/Reveal";
import dashboard from "@/assets/hiresmart-dashboard.png";

const Results = () => {
  return (
    <section aria-label="Results visualization" className="py-16 md:py-24 border-t border-border bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Results Visualization</h2>
          <p className="mt-3 text-muted-foreground">Understand outcomes at a glance with color-coded categories and clear charts.</p>
        </div>

        <Reveal>
          <figure className="mt-10 rounded-xl border border-border bg-card p-3 md:p-4 shadow-sm">
            <img
              src={dashboard}
              alt="Dashboard mockup showing Best for Hire, Can Consider, and Not Good categories"
              className="w-full h-auto rounded-lg"
              loading="lazy"
              decoding="async"
              width={1024}
              height={640}
            />
            <figcaption className="mt-3 text-center text-sm text-muted-foreground">
              Candidate categories powered by cosine similarity and skill matching
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
};

export default Results;
