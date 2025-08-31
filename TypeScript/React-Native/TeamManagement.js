/**
 

🔹 Leadership & Team Management
Q. How do you mentor junior developers in your team?
A. Daily status call to check what they did, what they are planning and if any blocker.


Q. How do you perform code reviews? What do you look for?
    - it should resolved the issues.
    - Any edge case missed
    - Code clarity and readability
    - naming convension should be proper.
    - function and variable should be meaningful.
    - Architecture & design
    - Code should follow the project architecture
    - optimized code.
    - sensitive data should not be exposed.
    - all test cases should be passed.
    - proper documentation for complex logics/features.


        Review process should be constructive, not criticism.
        Encourage discussion
        Learn from reviews.


Q. Describe a situation where you had to mediate a technical disagreement in your team.
A. STAR Format Answer = Situation -> Task -> Action -> Result

    SITUATION:
        In one of our React Native projects, we were building a highly interactive live trading dashboard with 
        real-time updates and complex charting. A disagreement arose between two senior engineers on how to 
        manage the app's state across multiple components.

    TASK:
        conflicts between using Redux or Context API as state management.
        using Github Actions or Fastlane.

        My task, as the tech lead, was to evaluate both options objectively, mediate the discussion, 
        and guide the team toward a decision that balanced performance, scalability, and 
        maintainability—while keeping the team aligned.

    ACTION:
        - Facilitated a technical session where both engineers presented pros and cons with
            code examples and performance implications.
        - We ran a small spike/prototype for both approaches on a real use-case from our projects.
        - Encourage the team to focus on Team familiarlity, Debugging needs, Code Scalibility, Onboarding impact.

    RESULT:
        React Context + useReducer would be used for isolated feature scopes (like theme and preferences).

        Redux (with Redux Toolkit) would manage cross-cutting, global data like authentication and real-time trading feed.

    TAKE AWAY:
        - Focus on facilitation, not dictation
        - Use experimentation to resolve theory-based conflicts.
        - Mediated based on data, not opinion
        - Promoted a collaborative proof-of-concept instead of choosing sides
        - Focused on documentation, maintainability, and team ownership
        - Reframe arguments into goals (“What are we trying to solve?”).
        - Listen first, don't assume intent.

    OTHER CONFLICTS could be:
        - State Management Approach (Context + Hooks vs Redux vs MobX vs Zustand)
        # Choose based on app scale & team comfort. Prototype both. Define architecture guidelines.
        - Navigation Library Choice (React Navigation vs React Native Navigation (Wix))
        # Use React Navigation unless you need native transitions or high perf.
        - Using Expo vs Bare React Native
        # Use Expo for MVPs. Go bare when native features or EAS limits hit.
        - Unit tests vs E2E vs snapshot testing – which ones and how much?
        # Define a testing pyramid. Automate CI. Balance speed with confidence.
        - Who owns the Fastlane scripts, certificates, release process?
        # Assign CI/CD owners. Automate with GitHub Actions/Fastlane. Document everything.
        - Native Module Integration (JavaScript engineer vs native engineer expectations)
        # Use JSI/TurboModules with strong typing. Document interfaces. Sync often.

Q: How do you plan sprints and allocate tasks in a cross-platform team?
A: When working with cross-platform teams like designers, product managers and backend developers, clear and open
communincation is key to ensuring everyone is aligned and project moves smoothly.

With Designer:
    Regular feedback on design.
    When design got finalized, tools like figma make this process transparent.

With Product Owner:
    Defining requirements: ensure that fully understand the product requirements, objective on the process.
    Frequently work with product owner to prioritize features and tasks. We offen tools like JIRA, KANBAN Board.

With Backend Developer: 
    Crucial to have good documentation for API contracts and endpoints.
    Sync up on architecture and data flow and dependencies.


General Tips:
    -Should have regular sync up calls.
    -Should keep stakeholders on mail loops by sending regular work process and status updates.


Q: What’s your strategy when onboarding new team members?
A: - Ensure their environment setup is smooth: Access to GitHub, CI/CD tools, communication channels, 
    and documentation.
    - Assign a starter guide or README that includes:
        Project structure
        Common scripts
        Deployment process
        Branching strategy
    - Schedule a 1:1 onboarding session to walk them through the project.
    - Do a weekly check-in for the first month to answer questions and remove blockers.
    - Assign them to gradually more complex tasks—e.g., bug fixes → feature enhancement → full module.
    - Assign a code buddy for his/her first PR.
    - Arrange ice-breaking session with whole team member, so he/she can interact with the whole team. 

 */
