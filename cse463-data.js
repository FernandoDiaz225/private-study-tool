// CSE 463 — Introduction to Human Computer Interaction
// Course data file for the Study Tool
// To update: edit this file and re-import into index.html

window.CSE463_DATA = {
    code: "CSE 463",
    name: "Introduction to Human Computer Interaction",
    prof: "Dr. Atkinson",
    color: "#fb923c",
    storagePrefix: "cse463_",
    modules: [
      {
        id: "w1", label: "Week 1", subtitle: "Foundations of HCI", color: "#fb923c",
        flashcards: [
          // Boeing 737 MAX Case Study
          { q: "What is the Boeing 737 MAX case study used to illustrate in this course?", a: "It illustrates how correct software can fail when it meets human limits. Two crashes occurred not because of a software bug, but because of an interaction design failure \u2014 MCAS acted without clear communication to pilots, creating an interface gap." },
          { q: "What is MCAS?", a: "Maneuvering Characteristics Augmentation System. A software system embedded in the flight control computer that automatically adjusts aircraft pitch to make the 737 MAX feel like earlier 737 models during certain flight conditions." },
          { q: "When does MCAS activate?", a: "When the aircraft is in manual flight, flaps are retracted, and the system detects a high Angle of Attack (AoA). AoA is the angle between the wing and oncoming airflow \u2014 high AoA can indicate an impending stall." },
          { q: "What does MCAS actually do when activated?", a: "It commands the horizontal stabilizer to push the aircraft nose downward, and repeats this action if high AoA persists. This happens without pilot request, without a dedicated MCAS alert, and without clearly stating why the nose is moving." },
          { q: "What was the key engineering constraint Boeing faced?", a: "Three competing pressures: (1) preserve familiar 737 handling, (2) avoid expensive pilot retraining, (3) compete rapidly with Airbus. The solution was software (MCAS) rather than hardware redesign." },
          { q: "What is the 'interface problem' with MCAS?", a: "From the pilot's perspective: the control column resists input, the aircraft trims nose-down repeatedly, and alerts are fragmented and indirect. The pilot sees effects but not system intent \u2014 this is an interface gap." },
          { q: "What is an 'authority inversion' in HCI?", a: "When the system decides first and the human reacts later. Before MCAS, pilot inputs directly shaped aircraft behavior. With MCAS, sensor inference could override pilot intent. Designing this inversion is an HCI responsibility." },
          { q: "Why was training alone insufficient for the MCAS problem?", a: "The issue wasn't pilot knowledge \u2014 it was limited system transparency, high cognitive load during takeoff, and time-critical decision windows. Training cannot compensate for unclear system state and ambiguous control authority. Interfaces must carry that burden." },
          { q: "What is 'underspecified behavior' vs. 'hidden behavior'?", a: "MCAS's behavior was not hidden \u2014 it was underspecified. The system's actions were documented but not clearly communicated through the interface in real-time. Pilots couldn't see what the system was doing or why." },
          { q: "When does automation assist effectively?", a: "When its goals are visible, its limits are legible, and its behavior can be predicted. MCAS failed because it intervened without becoming an object of interaction \u2014 like an invisible co-pilot without shared context." },
          { q: "What pattern should you notice from the Boeing case?", a: "This pattern appears whenever systems predict user behavior, act before confirmation, and minimize visible interfaces. As systems become more intelligent, interfaces often become thinner \u2014 that is dangerous." },
          // HCI Fundamentals
          { q: "What does HCI study?", a: "Human\u2013Computer Interaction examines how people perceive, interpret, and act when interacting with computational systems \u2014 not in ideal conditions, but under real cognitive limits, imperfect attention, and limited time." },
          { q: "Why was computer science alone not enough, leading to HCI?", a: "Traditional CS focuses on correctness, efficiency, and performance. But it doesn't answer: Can a human understand what the system is doing? Can they recover when something goes wrong? Can they act safely under pressure? HCI fills that gap." },
          { q: "What is the core assumption of HCI about people?", a: "People are not rational optimizers, error-free operators, or passive recipients. We are cognitively limited, context-sensitive, and shaped by interface structure. Design must work with those realities." },
          { q: "Why is 'human error' a red flag in HCI?", a: "HCI asks: What did the interface make easy? What did it make hard? What did it hide? What did it demand under stress? Error is often a design signal, not a flaw in the person." },
          { q: "What counts as an 'interface' in HCI?", a: "Not just screens, buttons, and menus. An interface includes automation behavior, timing of feedback, what the system explains vs. assumes, and what it allows vs. prevents. MCAS was an interface even though it didn't look like one." },
          { q: "What is HCI really about (not about)?", a: "HCI is NOT about visual polish, aesthetic preference, or subjective taste. It IS about legibility, control, recoverability, and accountability \u2014 especially when stakes are high." },
          { q: "What is the repeating design question of HCI?", a: "Who understands what the system is doing \u2014 and when? Who can intervene \u2014 and how quickly? Who absorbs the consequences when the interface fails?" },
          // Human-Centered Design
          { q: "What are the four key principles of human-centered design?", a: "(1) People-centered: focus on people and their context. (2) Solve the right problems (root causes, not symptoms). (3) Everything is a system of interconnected parts. (4) Small and simple interventions: iterate, prototype, test, and refine." },
          // UX, UI, Usability
          { q: "What is User Experience (UX)?", a: "The process of creating products that provide meaningful and relevant experiences. UX involves the entire process of acquiring and integrating a product, including branding, design, usability, and function. UX overlaps with HCI, but UX is industry-driven while HCI is research-focused." },
          { q: "What is User Interface (UI)?", a: "The screens, buttons, toggles, icons, and other visual elements you interact with when using a website, app, or device. UI is the visual layer; UX is the entire interaction experience including how you feel about it." },
          { q: "What is Usability?", a: "How easily a person can accomplish a given task with a product. It is the result of intentional, research-based, and user-tested design decisions. Usability focuses on task completion; UX focuses on the overall experience." },
          { q: "How does Usability differ from User Experience?", a: "Usability = ability to use a system to successfully complete a task (task-related). UX = thoughts, emotions, and perceptions that result from an interaction (feelings-focused). Usability engineering focuses on getting the job done; experience design foregrounds feelings, emotions, and values." },
          { q: "What are the three factors that influence User Experience?", a: "(1) The system itself, (2) the user and their characteristics, and (3) the context of use of the technology or system." },
          { q: "What are the five goals of usability?", a: "(1) Learnability: ease of first-time task completion. (2) Efficiency: speed after learning. (3) Memorability: ease of returning after absence. (4) Errors: frequency, severity, and recoverability. (5) Satisfaction: pleasantness of use." },
          { q: "What are the three components of user testing?", a: "(1) Get representative users. (2) Ask them to perform representative tasks. (3) Observe what they do \u2014 where they succeed and where they have difficulties. Be quiet and let the users do the talking." },
          { q: "Why is usability important for business?", a: "More usable = less training needed. Reduces help desk calls and support costs. User-centered design reduces maintenance builds and bug fixes post-launch. Ensures positive user experiences." },
          { q: "When should you work on usability?", a: "Before starting: test the old design. Test competitors' designs. Conduct field studies. Make paper prototypes and test them. Refine through multiple iterations (low-fidelity to high-fidelity). Inspect against usability guidelines. Test the final implementation again." },
          { q: "What is User Experience according to the ISO definition?", a: "A person's perceptions and responses that result from the use or anticipated use of a product, system, or service. It goes beyond interface design to address emotions, beliefs, preferences, physical/psychological responses, and behaviors before, during, and after use." },
        ],
        trueFalse: [
          // Boeing 737 MAX / HCI
          { s: "The Boeing 737 MAX crashes were caused by a software bug in MCAS.", ans: false, e: "MCAS worked as designed. The failure was in interaction design \u2014 the system acted without clear communication to pilots, creating an interface gap. It was an HCI failure, not a software bug." },
          { s: "MCAS used data from both AoA sensors simultaneously to make decisions.", ans: false, e: "MCAS initially used data from only one sensor at a time. A single sensor's faulty reading could trigger automated nose-down commands." },
          { s: "MCAS's behavior is described as 'underspecified' rather than 'hidden.'", ans: true, e: "The behavior was documented but not clearly communicated through the interface in real-time. Pilots couldn't see what the system was doing or why during flight." },
          { s: "An authority inversion occurs when the human decides first and the system reacts.", ans: false, e: "An authority inversion is the opposite: the system decides first, and the human reacts later. MCAS could override pilot intent based on sensor inference." },
          { s: "Automation assists effectively when its goals are visible, its limits are legible, and its behavior can be predicted.", ans: true, e: "This is the key principle. MCAS failed all three \u2014 it intervened without becoming an object of interaction, like an invisible co-pilot without shared context." },
          { s: "The Boeing case shows that as systems become more intelligent, interfaces should become thinner.", ans: false, e: "The lecture warns this is dangerous. As systems become more intelligent, interfaces often become thinner \u2014 but they shouldn't. The pattern of predicting behavior, acting before confirmation, and minimizing visible interfaces leads to failures." },
          { s: "Training can compensate for unclear system state and ambiguous control authority.", ans: false, e: "Training cannot compensate for these. Interfaces must carry the burden of communicating system state, especially during high cognitive load and time-critical situations." },
          { s: "In HCI, 'human error' is considered a design signal rather than a personal flaw.", ans: true, e: "HCI asks what the interface made easy, hard, hidden, or demanded under stress. Error often reveals design problems, not user incompetence." },
          { s: "An interface only includes screens, buttons, and menus.", ans: false, e: "An interface also includes automation behavior, timing of feedback, what the system explains vs. assumes, and what it allows vs. prevents. MCAS was an interface even though it didn't look like one." },
          { s: "HCI is primarily about making products visually attractive.", ans: false, e: "HCI is about legibility, control, recoverability, and accountability \u2014 not visual polish, aesthetic preference, or subjective taste." },
          { s: "The core assumption of HCI is that people are rational optimizers who process information perfectly.", ans: false, e: "HCI assumes the opposite: people are cognitively limited, context-sensitive, and shaped by interface structure. Design must work with these realities." },
          { s: "HCI emerged because traditional computer science couldn't answer whether humans could understand and safely use systems.", ans: true, e: "CS focuses on correctness, efficiency, and performance but doesn't address whether humans can understand systems, recover from errors, or act safely under pressure." },
          // Human-Centered Design
          { s: "Human-centered design encourages rushing to a solution to save time.", ans: false, e: "The opposite: human-centered design advocates small and simple interventions with iterative work. Prototype, test, and refine proposals to ensure solutions meet real needs." },
          { s: "One principle of human-centered design is to solve root problems, not just symptoms.", ans: true, e: "If you only address symptoms, they keep returning. Understanding and solving the underlying fundamental issues is a key principle." },
          // UX, UI, Usability
          { s: "UX and usability are the same thing.", ans: false, e: "Usability focuses on task completion (can you do it easily?). UX encompasses the entire experience including emotions, feelings, and perceptions before, during, and after use." },
          { s: "UI refers to the visual elements you interact with, while UX refers to the entire interaction experience.", ans: true, e: "UI = screens, buttons, toggles, icons. UX = the whole experience including how you feel about the interaction." },
          { s: "HCI is industry-driven while UX design is research-focused.", ans: false, e: "It's the other way around. HCI is research-focused, while UX design is industry-driven. They overlap but have different orientations." },
          { s: "The five goals of usability are: learnability, efficiency, memorability, errors, and satisfaction.", ans: true, e: "Learnability (first-time ease), Efficiency (speed after learning), Memorability (ease of returning), Errors (frequency/severity/recovery), Satisfaction (pleasantness)." },
          { s: "User testing should involve watching users silently rather than guiding them through tasks.", ans: true, e: "The three components: get representative users, ask them to perform representative tasks, and observe. Be quiet and let the users do the talking." },
          { s: "Usability work should only begin after the final product is built.", ans: false, e: "Usability work should start before the new design (test old design, test competitors, field studies), continue through paper prototypes and iterations, and include testing the final implementation." },
          { s: "The three factors that influence UX are: the system, the user, and the context of use.", ans: true, e: "User experience is shaped by the system itself, the user and their characteristics, and the context in which the technology is used." },
          { s: "User experience only covers what happens during product use, not before or after.", ans: false, e: "UX addresses emotions, perceptions, and responses that occur before, during, AND after use. It includes anticipated use as well." },
        ],
      },
    ],
};
