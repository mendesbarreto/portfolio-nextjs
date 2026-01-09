export function Education() {
  return (
    <section className="mb-12 md:mb-16">
      <h2 className="text-2xl font-bold text-white mb-4">
        <span className="text-mTeal">##</span> Education & Languages
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-backgroundLight p-6 rounded-lg border border-mTeal/20">
          <h3 className="text-xl font-bold text-white mb-2">Education</h3>
          <p className="text-mTeal font-semibold">Universidade Anhembi Morumbi</p>
          <p className="text-mGray">Bachelor Degree in Game Design and Development</p>
          <p className="text-mGray text-sm mt-1">2010</p>
        </div>

        <div className="bg-backgroundLight p-6 rounded-lg border border-mTeal/20">
          <h3 className="text-xl font-bold text-white mb-3">Languages</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-mGray">Portuguese</span>
              <span className="text-mTeal font-semibold">Native</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-mGray">English</span>
              <span className="text-mTeal font-semibold">Fluent</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-mGray">French</span>
              <span className="text-mTeal font-semibold">Professional Working</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
