import { Download, Code2, Briefcase, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HomePageProps {
    onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
    const [displayText, setDisplayText] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const fullText = 'BackEnd Developer';

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                setIsTypingComplete(true);
                clearInterval(typingInterval);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, []);

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="flex-1 space-y-8 animate-fade-in-up">
                        <div className="space-y-4">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
                                Hi, I'm{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Zoirjon Abdullayev
                </span>
                            </h1>
                            <div className="flex items-center gap-2 text-2xl sm:text-3xl text-gray-300">
                                <Code2 className="text-cyan-400" size={32} />
                                <span className="font-mono">
                  {displayText}
                                    <span
                                        className={`inline-block w-0.5 h-8 bg-cyan-400 ml-1 ${
                                            isTypingComplete ? 'animate-blink' : ''
                                        }`}
                                    />
                </span>
                            </div>
                        </div>

                        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                            Passionate about building elegant solutions to complex problems.
                            Specialized in creating modern web applications with cutting-edge
                            technologies and best practices.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => onNavigate('projects')}
                                className="group px-8 py-4 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
                            >
                                <Briefcase size={20} />
                                View Projects
                                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
                            </button>

                            <button
                                onClick={() => onNavigate('contact')}
                                className="px-8 py-4 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 flex items-center gap-2 border border-gray-700 hover:border-cyan-400 hover:scale-105"
                            >
                                <Mail size={20} />
                                Contact Me
                            </button>

                            <button
                                onClick={handleDownloadResume}
                                className="px-8 py-4 bg-transparent text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center gap-2 border border-cyan-400 hover:scale-105"
                            >
                                <Download size={20} />
                                Download Resume
                            </button>
                        </div>

                        <div className="flex gap-6 pt-8">
                            {['Java', 'Spring Boot', 'Spring Framework'].map(
                                (tech, index) => (
                                    <div
                                        key={tech}
                                        className="px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 text-gray-300 text-sm font-mono hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 cursor-default animate-fade-in-up"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        {tech}
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    <div className="flex-shrink-0 animate-fade-in-up animation-delay-300">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-50 animate-pulse" />
                            <img
                                src="assets/profile.jpg"
                                alt="Profile"
                                className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-gray-700 shadow-2xl hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Code2,
                            title: 'Clean Code',
                            description: 'Writing maintainable and scalable code',
                        },
                        {
                            icon: Briefcase,
                            title: 'Best Practices',
                            description: 'Following industry standards and patterns',
                        },
                        {
                            icon: Mail,
                            title: 'Communication',
                            description: 'Clear and effective collaboration',
                        },
                    ].map((item, index) => (
                        <div
                            key={item.title}
                            className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 cursor-default animate-fade-in-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <item.icon className="text-cyan-400 mb-4" size={40} />
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}