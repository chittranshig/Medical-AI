function FeatureCard({ icon: Icon, title, description }) {
    return (
      <div className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40">
  
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
          <Icon className="h-6 w-6" />
        </div>
  
        <h3 className="mb-2 text-lg font-semibold text-slate-900">
          {title}
        </h3>
  
        <p className="text-sm leading-6 text-slate-600">
          {description}
        </p>
  
      </div>
    );
  }
  
  export default FeatureCard;