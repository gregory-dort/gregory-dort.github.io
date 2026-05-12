import { motion } from 'framer-motion';
import { ProjectCard } from '../components';

const Projects = [
    {
        title: 'Forkkast Foods',
        description: 'Full-stack meal prep scheduling web application, featuring a user-friendly interface, secure authentication, and robust data management to simplify weekly meal planning',
        imageUrl: '/Pasta.jpg',
        altText: 'Prep Time Logo',
        projectUrl: '',
        repoUrl: 'https://github.com/gregory-dort/prep-time',
        techStack: ['React', 'Express', 'NodeJS', 'PostgreSQL', 'TailwindCSS', 'Typescript']
    },
    {
        title: 'ParkPerfect',
        description: 'Full-stack platform created as a software solution for university campus parking, featuring a user-friendly interface for real-time parking availability & reservation',
        imageUrl: '/Park Perfect Logo.png',
        altText: 'Park Perfect Logo',
        projectUrl: '',
        repoUrl: 'https://github.com/kevinjt12/ParkPerfect',
        techStack: ['React', 'Javascript', 'Python', 'PostgreSQL', 'Django']
    },
    {
        title: 'Confluence Streaming',
        description: 'Full-stack platform which combines multiple third-party services into a unified interface featuring a custom cable-style tv scheduling engine',
        imageUrl: '/CSLogo.png',
        altText: 'Confluence Streaming Logo',
        projectUrl: 'https://confluence-streaming-108b2e0ec103.herokuapp.com/',
        repoUrl: 'https://github.com/jpgeib/confluence-streaming',
        techStack: ['React', 'Javascript']
    },
    {
        title: 'PraxAssist - Medical Chatbot',
        description: 'Full-stack web application designed to streamline patient intake and prognosis workflows, simulating real clinical use cases',
        imageUrl: '/PraxLogin.png',
        altText: 'PraxAssist Logo',
        projectUrl: '',
        repoUrl: 'https://github.com/gregory-dort/prax-assist',
        techStack: ['React', 'Express', 'NodeJS', 'MongoDB', 'TailwindCSS', 'Javascript', 'Gemini']
    }
]

const Project = () => {

    return (
        <div id="project" className="min-h-[100vh]">
            <motion.h1
                className="text-6xl font-serif mb-16 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                The Project Collection
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {Projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            altText={project.altText}
                            projectUrl={project.projectUrl}
                            repoUrl={project.repoUrl}
                            techStack={project.techStack}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Project;