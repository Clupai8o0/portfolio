import { Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";
import React from "react";
import Logo from "./logo";

const Footer = () => {
	return (
		<footer className="w-full mt-4">
			<div className="max-w-7xl mx-auto my-8">
				<div className="w-full flex flex-col items-center" id="contact">
					<h1 className="text-4xl lg:text-6xl">Get In Touch</h1>
					<ul className="flex space-x-4 mt-6 mb-12">
						<li>
							<a
								href="https://www.linkedin.com/in/samridh-limbu"
								className="h-12 w-12 flex items-center justify-center bg-white/10 rounded-xl overflow-hidden cursor-pointer hover:bg-white/20 transition duration-300"
							>
								<Linkedin absoluteStrokeWidth strokeWidth={1.5} />
							</a>
						</li>
						<li>
							<a
								href="https://github.com/Clupai8o0"
								className="h-12 w-12 flex items-center justify-center bg-white/10 rounded-xl overflow-hidden cursor-pointer hover:bg-white/20 transition duration-300"
							>
								<Github absoluteStrokeWidth strokeWidth={1.5} />
							</a>
						</li>
						<li>
							<a
								href="mailto:limbusamaka@icloud.com"
								className="h-12 w-12 flex items-center justify-center bg-white/10 rounded-xl overflow-hidden cursor-pointer hover:bg-white/20 transition duration-300"
							>
								<Mail absoluteStrokeWidth strokeWidth={1.5} />
							</a>
						</li>
						<li>
							<a
								href="https://www.instagram.com/clupai8o0"
								className="h-12 w-12 flex items-center justify-center bg-white/10 rounded-xl overflow-hidden cursor-pointer hover:bg-white/20 transition duration-300"
							>
								<Instagram absoluteStrokeWidth strokeWidth={1.5} />
							</a>
						</li>
						<li>
							<a
								href="https://www.facebook.com/samridh.limbu.792"
								className="h-12 w-12 flex items-center justify-center bg-white/10 rounded-xl overflow-hidden cursor-pointer hover:bg-white/20 transition duration-300"
							>
								<Facebook absoluteStrokeWidth strokeWidth={1.5} />
							</a>
						</li>
					</ul>
				</div>
				<div className="border-t border-white/20 flex flex-col md:flex-row justify-between items-center py-6">
					<span className="font-white text-xl font-regular ">clupai</span>
					<ul className="flex flex-wrap space-x-6 mt-4 opacity-80">
						<li>
							<a href="#home" className="hover:underline opacity-100">Home</a>
						</li>
						<li>
							<a href="#about" className="hover:underline opacity-100">About</a>
						</li>
						<li>
							<a href="#skills" className="hover:underline opacity-100">Skills</a>
						</li>
						<li>
							<a href="#projects" className="hover:underline opacity-100">Projects</a>
						</li>
						<li>
							<a href="/resume" className="hover:underline opacity-100">Resume</a>
						</li>
						<li>
							<a href="#contact" className="hover:underline opacity-100">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
