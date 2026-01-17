import { Navbar, Footer } from '../components';
import type { SectionIDs } from '../components/Navbar';
import { Experience, Project } from './index';
import Hero from './Hero';

const sectionID: SectionIDs = {
    hero: 'hero',
    experience: 'experience',
    project: 'project'
};

const Home = () => {
    return (
        <div className = "bg-gradient-to-br from-cyan-100 to-slate-600 w-full min-h-screen text-gray-800">
            <Navbar sectionIds = {sectionID} />

            <main className = "container mx-auto px-4">
                <section id = {sectionID.hero} className = "py-24">
                    <Hero />
                </section>
                <section id = {sectionID.experience} className = "py-24">
                    <Experience />
                </section>
                <section id = {sectionID.project} className = "py-24">
                    <Project />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Home;