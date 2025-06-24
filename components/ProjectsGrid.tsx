import Image from 'next/image'
import React from 'react'

const projects = [
  {
    title: 'Data Pipeline Monitoring Dashboard',
    description:
      'A real-time dashboard for monitoring ETL pipeline health and performance. Built with Python, Airflow, and Plotly.',
    image: 'https://raw.githubusercontent.com/recharts/recharts-website/master/public/img/logo.svg',
    github: 'https://github.com/your-github/data-pipeline-dashboard',
  },
  {
    title: 'Automated Data Cleaning Bot',
    description:
      'A bot that automatically cleans and validates incoming data streams. Implemented with Python and Docker.',
    image: 'https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif',
    github: 'https://github.com/your-github/data-cleaning-bot',
  },
  {
    title: 'Streaming Analytics Platform',
    description:
      'A scalable platform for real-time analytics on streaming data. Built with Spark and AWS Kinesis.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg',
    github: 'https://github.com/your-github/streaming-analytics',
  },
  {
    title: 'Data Visualization Toolkit',
    description:
      'A toolkit for building interactive data visualizations. Built with React and D3.js.',
    image: 'https://raw.githubusercontent.com/d3/d3-logo/master/d3.png',
    github: 'https://github.com/your-github/data-viz-toolkit',
  },
]

const ProjectsGrid = () => (
  <section className="pb-16 px-4 max-w-6xl mx-auto w-full">
    <h2 className="text-3xl font-bold mb-8 text-primary text-center">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <div
          key={project.title}
          className="flex flex-col bg-slate-800/80 border border-slate-700 rounded-2xl shadow-lg overflow-hidden hover:scale-[1.03] transition-transform group"
        >
          <div className="h-48 w-full bg-slate-900 flex items-center justify-center overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              className="object-contain h-32 w-auto group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              width={100}
              height={100}
            />
          </div>
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-semibold text-cyan-200 mb-2">{project.title}</h3>
            <p className="text-slate-300 mb-4 flex-1">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto px-4 py-2 rounded-full bg-cyan-700 text-cyan-100 font-medium hover:bg-cyan-600 transition-colors shadow"
            >
              View on GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default ProjectsGrid
