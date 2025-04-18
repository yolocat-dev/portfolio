import { Content, ContentTitle, Page, Section } from "@/components/content";
import { Experience, ExperienceAndProjects, TimelineEnd, TimelineStart } from "@/components/experience";
import { Sidebar, SidebarTitle, SidebarName, SidebarSubtitle, SidebarNavigation, SidebarNavLink } from "@/components/sidebar";
import { SidebarNavItem } from "@/components/sidebar-client";
import { tags } from "./tags";
import { Email, GitHub, Discord } from "@/components/icons";
import Quote from "@/components/quote";
import { Contact, ContactCopy, ContactEnd, ContactLink, ContactStart } from "@/components/contact";

import aesterisk1 from "@/images/aesterisk-1.png";
import starlight1 from "@/images/starlight-1.png";
import proxyLogic1 from "@/images/proxylogic-1.png";
import proxyLogic2 from "@/images/proxylogic-2.png";
import visiba1 from "@/images/visiba-1.png";

export default function Portfolio() {
	return (
		<Page>
			<Sidebar rows={3}>
				<SidebarName>
					<SidebarTitle>{"yolocat"}</SidebarTitle>
					<SidebarSubtitle>{"Software Engineer"}</SidebarSubtitle>
					<SidebarSubtitle secondary>{"Sweden"}</SidebarSubtitle>
				</SidebarName>
				<SidebarNavigation>
					<SidebarNavItem section="experience">
						{"* Experience"}
						<br/>
						<div className="w-[2ch] h-px inline-block" />
						{"& Projects"}
					</SidebarNavItem>
					<br/>
					<SidebarNavItem section="contact">{"* Contact"}</SidebarNavItem>
				</SidebarNavigation>
				<SidebarNavigation inter>
					<SidebarNavLink href="https://github.com/yolocat-dev">
						<div className="flex flex-row items-end gap-4">
							<GitHub size={32} />
							<span>{"yolocat-dev"}</span>
						</div>
					</SidebarNavLink>
				</SidebarNavigation>
			</Sidebar>
			<Content>
				<Section id="experience">
					<ContentTitle>{"Experience & Projects"}</ContentTitle>
					<ExperienceAndProjects>
						<TimelineStart />
						<Experience
							title="Freshman Year"
							content="I'm in my freshman year, dedicating myself to full-time academic studies, with an expected graduation date of 2028."
							time="Aug 2024 - Jun 2025"
							state="Education"
						/>
						<Experience
							title="Aesterisk"
							content="Aesterisk is a server management platform, providing a user-friendly interface for your self-hosted servers. Aesterisk integrates with Docker to containerize your servers, and builds on our custom-built crate for Aesterisk <-> Docker communication. Aesterisk is built and operated completely by me, and I'm planning to release it as a SaaS once finished."
							time="May 2024 - Present"
							state="In Progress"
							tags={[tags.rust, tags.nextjs, tags.postgresql, tags.docker, tags.typescript, tags.shadcnui, tags.authjs, tags.react, tags.tailwindcss]}
							github="https://github.com/aesterisk"
							images={[aesterisk1]}
						/>
						<Experience
							title="Starlight"
							content="Starlight is a work-in-progress ARM-based kernel and operating system, built in Rust and ARM assembly. Starlight is designed to be a lightweight and efficient operating system for portable gaming devices, currently focusing on Raspberry Pi support. As of Oct 2024, Starlight has a physical and virtual memory manager, a modular device driver system with interrupt request support, and GPIO and UART drivers."
							time="Aug 2024 - Present"
							state="In Progress"
							tags={[tags.rust, tags.assembly]}
							github="https://github.com/StarlightConsole"
							images={[starlight1]}
						/>
						<Experience
							title="Portfolio"
							content="Hey, you're looking at it as we speak!"
							time="Oct 2024"
							state="Completed"
							tags={[tags.nextjs, tags.react, tags.tailwindcss, tags.typescript]}
							github="https://github.com/yolocat-dev/portfolio"
						/>
						<Experience
							title="ProxyLogic"
							content="Professionally worked as a full-stack freelancer for ProxyLogic, mostly working on their internal tools and backend (Node.js) <-> database (Firestore) communication, with a little bit of React."
							time="Jun - Jul 2024"
							state="Employment"
							tags={[tags.react, tags.typescript, tags.firebase, tags.nodejs, tags.javascript]}
							images={[proxyLogic1, proxyLogic2]}
							website="https://proxylogic.org"
						/>
						{/* <Experience
							title="CherryLock"
							content="CherryLock was a fun little hardware side-project I worked on while tinkering with an old Arduino I had found. I built an iOS and watchOS app that lets me connect to the Arduino with BLE, and (un-)lock my door with a simple tap, making use of a servo and a spare key I managed to glue together."
							time="Dec 2023 - Jul 2024"
							state="Backlog"
							tags={[tags.cpp, tags.arduino, tags.swift]}
						/> */}
						<Experience
							title="Visiba Care"
							content="Interned at Visiba Care, mostly fixing frontend bugs and user flow issues in their AI-powered triage system."
							time="Nov 2023"
							state="Internship"
							tags={[tags.react, tags.angular, tags.typescript, tags.javascript, tags.csharp]}
							images={[visiba1]}
							website="https://visibagroup.com"
						/>
						<TimelineEnd />
					</ExperienceAndProjects>
				</Section>
				<Section id="contact">
					<ContentTitle>{"Contact"}</ContentTitle>
					<Contact>
						<ContactStart />
						<ContactCopy icon={<Discord size={32} className="text-slate-500" />} title="yolocat." value="yolocat." />
						<ContactLink icon={<Email size={32} className="text-slate-500" />} title="developer@yolocat.dev" href="mailto:developer@yolocat.dev" />
						<ContactEnd />
					</Contact>
				</Section>
				<Quote>
					<span className="text-slate-800">{"“"}</span>
					<span>{"I'm "}</span>
					<span className="text-slate-500">{"unique"}</span>
					<span>{", like "}</span>
					<br/>
					<span className="text-slate-500">{"everyone else"}</span>
					<span>{"."}</span>
					<span className="text-slate-800">{"”"}</span>
				</Quote>
			</Content>
		</Page>
	);
}
