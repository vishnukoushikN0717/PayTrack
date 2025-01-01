import React from 'react';

export default function About() {
    const linkedInUrl = "https://www.linkedin.com/in/vishnu-koushik-n-b1b925265/";

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black text-gray-200">
            {/* Inline CSS for Keyframe Animation */}
            <style>
                {`
                    @keyframes slideInUp {
                        0% {
                            transform: translateY(50px);
                            opacity: 0;
                        }
                        100% {
                            transform: translateY(0);
                            opacity: 1;
                        }
                    }

                    .animate-slide-in-up {
                        animation: slideInUp 1s ease-out;
                    }
                `}
            </style>

            <div className="max-w-7xl mx-auto px-6 py-20 space-y-24 animate-slide-in-up">
                {/* Hero Section */}
                <div className="text-center">
                    <h1 className="text-5xl font-extrabold text-blue-400 leading-tight mb-6 hover:text-blue-300 transition-colors duration-300">
                        Empowering Financial Freedom
                    </h1>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        At <span className="font-semibold text-blue-400">PayTrack</span>, we revolutionize personal finance management by providing tools designed to simplify, analyze, and optimize your financial journey. We believe that everyone deserves to have control over their financial future.
                    </p>
                </div>

                {/* Vision and Mission Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="p-8 bg-gray-700 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 animate-slide-in-up">
                        <h2 className="text-4xl font-bold text-blue-400 mb-6 hover:text-blue-300 transition-colors duration-300">Our Vision</h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            To be the leading personal finance platform that enables users worldwide to manage their finances effortlessly, ensuring long-term stability and prosperity.
                        </p>
                    </div>
                    <div className="group relative overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-slide-in-up">
                        <img
                            src="https://media.istockphoto.com/id/1488294044/photo/businessman-works-on-laptop-showing-business-analytics-dashboard-with-charts-metrics-and-kpi.jpg?s=612x612&w=0&k=20&c=AcxzQAe1LY4lGp0C6EQ6reI7ZkFC2ftS09yw_3BVkpk="
                            alt="Dashboard Analytics"
                            className="w-full h-80 object-cover rounded-lg transform transition-all duration-500 group-hover:scale-110 hover:brightness-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>

                {/* Core Features Section */}
                <div className="text-center animate-slide-in-up">
                    <h2 className="text-4xl font-bold text-blue-400 mb-12 hover:text-blue-300 transition-colors duration-300">
                        Why Choose PayTrack?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="p-8 bg-gray-700 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 animate-slide-in-up">
                            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Real-Time Tracking</h3>
                            <p className="text-lg text-gray-300">
                                Log income and expenses as they happen. See your spending breakdown with easy-to-understand charts.
                            </p>
                        </div>
                        <div className="p-8 bg-gray-700 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 animate-slide-in-up">
                            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Goal Setting</h3>
                            <p className="text-lg text-gray-300">
                                Set and track savings goals. Achieve milestones with tailored recommendations and progress updates.
                            </p>
                        </div>
                        <div className="p-8 bg-gray-700 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 animate-slide-in-up">
                            <h3 className="text-2xl font-semibold mb-4 text-blue-400">AI-Powered Insights</h3>
                            <p className="text-lg text-gray-300">
                                Our AI assistant provides real-time alerts and personalized insights, ensuring smarter financial decisions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="group relative overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-slide-in-up">
                        <img
                            src="https://media.istockphoto.com/id/1424757003/photo/budget-and-financial-planning-concept-including-a-management-or-executive-cfo-estimating-the.jpg?s=612x612&w=0&k=20&c=-qReHcxce_QnKsWlvV1x7jOndAAjPpiuFR7fZ7AUfQ0="
                            alt="Expense Tracker"
                            className="w-full h-80 object-cover rounded-lg transform transition-all duration-500 group-hover:scale-110 hover:brightness-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-8 bg-gray-700 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 animate-slide-in-up">
                        <h2 className="text-4xl font-bold text-blue-400 mb-6">Meet Our Team</h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Driven by the combined expertise of Vishnu Koushik and Subhash, we craft innovative tools that transform how individuals manage their finances. Together, we blend financial insight, design, and technology to reshape the future of personal finance.
                            {/* Our dedicated team of finance professionals, designers, and tech innovators work tirelessly to bring you cutting-edge tools. Together, we are reshaping the way individuals manage . */}
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 mt-16 py-12 animate-slide-in-up">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-blue-400">Contact Info</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="mailto:vishnukoushikn@gmail.com" className="hover:text-blue-400 transition-colors duration-300">
                                        vishnukoushikn@gmail.com
                                    </a>

                                </li>
                                <li><a href="mailto:thesubhash7@gmail.com" className="hover:text-blue-400 transition-colors duration-300">
                                    thesubhash7@gmail.com
                                </a></li>
                                <li>Ph-No: +91-9550877585</li>
                                <li>Ph-No: +91-7675906441</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-blue-400">Social Media</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href={linkedInUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-400 transition-colors duration-300"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-blue-400 transition-colors duration-300"
                                    >
                                        Twitter
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-blue-400">About</h3>
                            <p className="text-sm leading-relaxed">
                                PayTrack helps you manage your finances efficiently with an easy-to-use interface and detailed transaction tracking.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-blue-400">Support</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                                        FAQs
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                                        Help Center
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center mt-12 pt-8 border-t border-gray-800">
                        <p>&copy; 2024 PayTrack. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
