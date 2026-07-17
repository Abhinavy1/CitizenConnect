function PageSection({
  id,
  children,
  className = "",
}) {
  return (
    <section
      id={id}
      className={`section-padding relative ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {children}
      </div>
    </section>
  );
}

export default PageSection;