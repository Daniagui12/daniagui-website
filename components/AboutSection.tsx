import React from 'react'

const skills = [
  { name: 'Python', icon: '🐍' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'Airflow', icon: '🌬️' },
  { name: 'Spark', icon: '⚡' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'dbt', icon: '🛠️' },
  { name: 'Tableau', icon: '📊' },
]

const AboutSection = () => (
  <section className="pb-16 px-4 max-w-3xl mx-auto w-full">
    <h2 className="text-3xl font-bold mb-4 text-primary">About Me</h2>
    <p className="text-lg mb-2 text-slate-500">
      I&apos;m a passionate data engineer with experience designing, building, and maintaining
      scalable data systems. My expertise spans ETL pipelines, cloud data platforms, and data
      visualization.
    </p>
    <p className="text-lg mb-2 text-slate-500">
      I love working with Python, SQL, and modern data tools to solve real-world problems and
      empower organizations with actionable insights.
    </p>

    <div className="my-12">
      <h1 className="text-lg font-mono text-slate-400 text-center mb-4">&ndash; data flow</h1>
      <div className="dataflow">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="data"></div>
        ))}
      </div>

      <h1 className="text-lg font-mono text-slate-400 text-center mb-4">&ndash; data flow b</h1>
      <div className="dataflow-b">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="data"></div>
        ))}
      </div>
    </div>

    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4 text-primary">Tech Stack</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center bg-slate-800/80 border border-slate-700 rounded-lg shadow p-4 hover:scale-105 transition-transform"
          >
            <span className="text-4xl mb-2">{skill.icon}</span>
            <span className="text-lg font-medium text-slate-200">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default AboutSection
