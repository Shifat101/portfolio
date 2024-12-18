import ShowcaseGrid from '../components/ShowcaseGrid';

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-black px-8 py-32">
      <div className="max-w-6xl mx-auto">
        <header className="mb-24">
          <h1 className="text-5xl text-white mb-6">Selected Work</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            A curated collection of my best projects, showcasing UI motion design,
            interactive prototypes, and visual design work.
          </p>
        </header>

        <ShowcaseGrid />
      </div>
    </div>
  );
}