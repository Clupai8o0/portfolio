"use client";

import {
	Mail,
	Phone,
	MapPin,
	Linkedin,
	Github,
	Globe,
	GraduationCap,
	Briefcase,
	Code,
	Award,
	Users,
	ChevronRight,
} from "lucide-react";
import ReactLenis from "lenis/react";

import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import Bounded from "@/components/containers/bounded";

export default function ResumePage() {
	return (
		<ReactLenis root>
			<main>
				<Bounded parentClassName="bg-stone-950 relative">
					<Navbar />
				</Bounded>

				{/* Hero / Header */}
				<Bounded parentClassName="bg-stone-950 pt-8 pb-16 md:pb-24">
					<section className="p flex flex-col gap-6">
						<h1 className="text-5xl md:text-6xl lg:text-8xl font-light">
							Samridh Limbu
						</h1>
						<div className="flex flex-wrap gap-4 text-sm md:text-base font-light opacity-80">
							<a
								href="tel:+61405314375"
								className="flex items-center gap-1.5 hover:opacity-100 transition duration-300"
							>
								<Phone className="w-4 h-4" />
								+61 405 314 375
							</a>
							<a
								href="mailto:limbusamaka@icloud.com"
								className="flex items-center gap-1.5 hover:opacity-100 transition duration-300"
							>
								<Mail className="w-4 h-4" />
								limbusamaka@icloud.com
							</a>
							<span className="flex items-center gap-1.5">
								<MapPin className="w-4 h-4" />
								70 Elgar Rd, Burwood, Melbourne, VIC
							</span>
						</div>
						<div className="flex flex-wrap gap-4 text-sm md:text-base font-light">
							<a
								href="https://linkedin.com/in/samridh-limbu"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition duration-300"
							>
								<Linkedin className="w-4 h-4" />
								linkedin.com/in/samridh-limbu
							</a>
							<a
								href="https://github.com/Clupai8o0"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition duration-300"
							>
								<Github className="w-4 h-4" />
								github.com/Clupai8o0
							</a>
							<a
								href="https://clupai.com"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition duration-300"
							>
								<Globe className="w-4 h-4" />
								clupai.com
							</a>
						</div>
					</section>
				</Bounded>

				{/* Career Profile */}
				<Bounded parentClassName="pb-16 md:pb-24">
					<section className="p">
						<SectionTitle icon={<Briefcase className="w-6 h-6" />} title="Career Profile" />
						<p className="text-lg md:text-xl font-light leading-relaxed opacity-90 max-w-4xl">
							Third-year Computer Science student at Deakin University with a High
							Distinction average (WAM ~87) and hands-on experience across full-stack
							development, cloud platforms, DevOps, and IoT. Founder of a
							Melbourne-based smart-product startup and President of the Deakin
							Software Engineering Club.
						</p>
					</section>
				</Bounded>

				{/* Key Skills */}
				<Bounded parentClassName="pb-16 md:pb-24">
					<section className="p">
						<SectionTitle icon={<Code className="w-6 h-6" />} title="Key Skills" />
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<SkillCategory
								title="Languages"
								skills="JavaScript/TypeScript, Python, Go, C++, HTML/CSS, SQL"
							/>
							<SkillCategory
								title="Frameworks"
								skills="Next.js, Node.js, Express, Django, React, Tailwind CSS"
							/>
							<SkillCategory
								title="Cloud & DevOps"
								skills="AWS (EC2, S3), Azure, Docker, Jenkins, GitHub Actions, CI/CD pipelines"
							/>
							<SkillCategory
								title="Data & AI"
								skills="RAG pipelines, vector databases, LangChain, MongoDB, PostgreSQL"
							/>
							<SkillCategory
								title="Other"
								skills="IoT (Arduino, MQTT), Agile/Scrum, Figma, Shopify (headless), NFC integration"
							/>
						</div>
					</section>
				</Bounded>

				{/* Education */}
				<Bounded parentClassName="pb-16 md:pb-24">
					<section className="p">
						<SectionTitle icon={<GraduationCap className="w-6 h-6" />} title="Education" />
						<div className="border border-white/10 rounded-3xl p-6 md:p-8">
							<h3 className="text-xl md:text-2xl font-light">
								Bachelor of Computer Science (Major: Internet of Things)
							</h3>
							<p className="text-base font-light opacity-70 mt-2">
								Deakin University, Burwood VIC | May 2024 – Jun 2027 (Expected)
							</p>
							<p className="text-base font-light opacity-90 mt-3">
								WAM ~87 (High Distinction average); 100% scholarship recipient
							</p>
							<div className="mt-4">
								<p className="text-sm font-light opacity-70 mb-2">Relevant units:</p>
								<div className="flex flex-wrap gap-2">
									{[
										"Data Structures & Algorithms",
										"Concurrent & Distributed Programming",
										"Embedded Systems",
										"Computational Intelligence",
										"Secure Backend Services",
										"Computer Networks",
									].map((unit) => (
										<span
											key={unit}
											className="text-sm font-light px-3 py-1 bg-white/5 border border-white/10 rounded-full"
										>
											{unit}
										</span>
									))}
								</div>
							</div>
						</div>
					</section>
				</Bounded>

				{/* Technical Projects */}
				<Bounded parentClassName="pb-16 md:pb-24">
					<section className="p">
						<SectionTitle icon={<Code className="w-6 h-6" />} title="Technical Projects" />
						<div className="flex flex-col gap-8">
							<ProjectCard
								title="GovChat — RAG-Based Government Q&A Platform"
								meta="Personal Project | Melbourne | 2025"
								bullets={[
									"Architected a Retrieval-Augmented Generation platform enabling citizens to query government policy documents using natural language, reducing information access barriers",
									"Built with TypeScript, LangChain, vector databases, and REST APIs; implemented document chunking, embedding pipelines, and semantic search for accurate retrieval",
									"Designed modular backend architecture with clear separation of concerns, enabling straightforward extension to additional document corpora",
								]}
							/>
							<ProjectCard
								title="HTTP Load Balancer"
								meta="Personal Project | Melbourne | 2025"
								bullets={[
									"Developed a concurrent HTTP load balancer in Go implementing round-robin and least-connections algorithms with health-check monitoring",
									"Handled concurrent connections using goroutines and channels, demonstrating understanding of systems-level concurrency patterns",
									"Documented architecture decisions and performance benchmarks in a public GitHub repository",
								]}
							/>
							<ProjectCard
								title="NMMUN Conference Website"
								meta="Freelance | Remote | 2023–2024"
								bullets={[
									"Designed and delivered a production website for an international Model United Nations conference, serving 500+ delegates and achieving top Google search rankings",
									"Built with Next.js and deployed with SEO optimisation, responsive design, and performance-first architecture",
								]}
							/>
							<ProjectCard
								title="Acknowledgement Force — Productivity Desktop App"
								meta="Personal Project | Melbourne | 2025"
								bullets={[
									"Built a cross-platform desktop application using Tauri (Rust + Web) that blocks the user's screen on startup until daily personal rules are acknowledged",
									"Achieved a 3 MB bundle size (vs ~100 MB Electron equivalent); published open-source on GitHub with release binaries",
								]}
							/>
						</div>
					</section>
				</Bounded>

				{/* Professional Experience */}
				<Bounded parentClassName="pb-16 md:pb-24">
					<section className="p">
						<SectionTitle icon={<Briefcase className="w-6 h-6" />} title="Professional Experience" />
						<div className="flex flex-col gap-8">
							<ExperienceCard
								title="Co-Founder & Technical Lead"
								company="TapCraft Studio"
								location="Melbourne, VIC"
								period="Jan 2026 – Present"
								bullets={[
									"Co-founded a Melbourne-based startup producing custom 3D-printed products with embedded NFC chips (smart business cards, event tags, retail tags) for B2B clients including real estate agents, event organisers, and corporates",
									"Built the e-commerce platform headless with Next.js and Shopify, integrating product customisation workflows and NFC programming logic",
									"Manage end-to-end operations: client consultation, 3D modelling, production (Bambu Labs), NFC encoding, and delivery — targeting $160K Year 1 revenue",
								]}
							/>
							<ExperienceCard
								title="Crew Coach"
								company="Hungry Jack's"
								location="Chadstone, VIC"
								period="Dec 2024 – Present"
								bullets={[
									"Train and mentor new crew members on operational procedures, food safety protocols, and customer service standards in a high-volume fast-food environment",
									"Coordinate shift operations during peak periods, managing team workflows and resolving customer issues under time pressure",
									"Demonstrate reliability and adaptability managing irregular weekly shift schedules while maintaining High Distinction academic performance",
								]}
							/>
							<ExperienceCard
								title="UI/UX Intern"
								company="Campbell Edwards Trust (via DeakinTalent FreelancingHUB)"
								location="Melbourne, VIC"
								period="Nov 2025 – Dec 2025"
								bullets={[
									"Redesigned the UI/UX of a decade-old charity website over 6 weeks, delivering multiple mockups and a technical implementation roadmap",
									"Facilitated client presentations and navigated competing stakeholder opinions, balancing design best practices with organisational vision",
								]}
							/>
						</div>
					</section>
				</Bounded>

				{/* Leadership & Extracurricular */}
				<Bounded parentClassName="pb-16 md:pb-24">
					<section className="p">
						<SectionTitle icon={<Users className="w-6 h-6" />} title="Leadership & Extracurricular" />
						<div className="flex flex-col gap-8">
							<div className="border border-white/10 rounded-3xl p-6 md:p-8">
								<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
									<h3 className="text-xl md:text-2xl font-light">President</h3>
									<span className="text-sm font-light opacity-70">
										May 2025 – Present
									</span>
								</div>
								<p className="text-base font-light opacity-70 mb-4">
									Deakin Software Engineering Club (DSEC) | Burwood, VIC
								</p>
								<ul className="flex flex-col gap-3">
									<BulletItem text="Lead a student community focused on providing genuine value to technology students through skill-building workshops, collaborative projects, and industry networking events" />
									<BulletItem text="Transitioned leadership model from personal execution to delegation and systems design, implementing structured workflows and role delegation across a committee" />
									<BulletItem text="Coordinate cross-functional collaboration with university staff, sponsors, and external organisations to expand club reach and impact" />
								</ul>
							</div>
							<div className="border border-white/10 rounded-3xl p-6 md:p-8">
								<h3 className="text-xl md:text-2xl font-light">Residential Leader</h3>
								<p className="text-base font-light opacity-70 mt-2">
									DeakinRes Burwood — trusted student leadership role within the university community
								</p>
							</div>
						</div>
					</section>
				</Bounded>

				{/* Certifications & Professional Development */}
				<Bounded parentClassName="pb-16 md:pb-24">
					<section className="p">
						<SectionTitle icon={<Award className="w-6 h-6" />} title="Certifications & Professional Development" />
						<div className="flex flex-col gap-4">
							<div className="border border-white/10 rounded-3xl p-6 md:p-8">
								<h3 className="text-lg md:text-xl font-light">
									Meta Back-End Developer Professional Certificate
								</h3>
								<p className="text-sm font-light opacity-70 mt-2">
									In progress — Python, Django, REST APIs, databases; 9 ACE college credits
								</p>
							</div>
							<div className="border border-white/10 rounded-3xl p-6 md:p-8">
								<h3 className="text-lg md:text-xl font-light">
									AWS Certified Cloud Practitioner
								</h3>
								<p className="text-sm font-light opacity-70 mt-2">Planned</p>
							</div>
							<div className="border border-white/10 rounded-3xl p-6 md:p-8">
								<h3 className="text-lg md:text-xl font-light">
									Microsoft Certified: Azure Fundamentals
								</h3>
								<p className="text-sm font-light opacity-70 mt-2">Planned</p>
							</div>
						</div>
					</section>
				</Bounded>

				<Footer />
			</main>
		</ReactLenis>
	);
}

function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
	return (
		<div className="flex items-center gap-3 mb-8">
			<span className="opacity-70">{icon}</span>
			<h2 className="text-3xl md:text-4xl font-light">{title}</h2>
		</div>
	);
}

function SkillCategory({ title, skills }: { title: string; skills: string }) {
	return (
		<div className="border border-white/10 rounded-3xl p-6">
			<h3 className="text-lg font-light opacity-70 mb-2">{title}</h3>
			<p className="text-base font-light leading-relaxed">{skills}</p>
		</div>
	);
}

function ProjectCard({
	title,
	meta,
	bullets,
}: {
	title: string;
	meta: string;
	bullets: string[];
}) {
	return (
		<div className="border border-white/10 rounded-3xl p-6 md:p-8">
			<h3 className="text-xl md:text-2xl font-light">{title}</h3>
			<p className="text-sm font-light opacity-70 mt-1">{meta}</p>
			<ul className="flex flex-col gap-3 mt-4">
				{bullets.map((bullet, i) => (
					<BulletItem key={i} text={bullet} />
				))}
			</ul>
		</div>
	);
}

function ExperienceCard({
	title,
	company,
	location,
	period,
	bullets,
}: {
	title: string;
	company: string;
	location: string;
	period: string;
	bullets: string[];
}) {
	return (
		<div className="border border-white/10 rounded-3xl p-6 md:p-8">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
				<h3 className="text-xl md:text-2xl font-light">{title}</h3>
				<span className="text-sm font-light opacity-70">{period}</span>
			</div>
			<p className="text-base font-light opacity-70 mt-1">
				{company} | {location}
			</p>
			<ul className="flex flex-col gap-3 mt-4">
				{bullets.map((bullet, i) => (
					<BulletItem key={i} text={bullet} />
				))}
			</ul>
		</div>
	);
}

function BulletItem({ text }: { text: string }) {
	return (
		<li className="flex gap-3 text-base font-light leading-relaxed">
			<ChevronRight className="w-4 h-4 mt-1 shrink-0 opacity-50" />
			<span>{text}</span>
		</li>
	);
}
