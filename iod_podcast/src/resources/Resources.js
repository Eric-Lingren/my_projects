import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { withAuthProvider } from '../context/AuthProvider'
import './resource-styles.css'


function Resources(props) {
    return (
        <div className={props.isAuthenticated? 'page-wrapper' : 'page-wrapper user-not-authenticated'} >
        <Controller>
            <Scene
                triggerHook="onLeave"
                duration={1000}
                pin
            >
            {(progress) => (
                <div className="sticky">
                    <Timeline totalProgress={progress} paused>
                        
                        <div className="heading">
                            <h2 className='pm-phases-header'> 5 Phases of project management: </h2>
                        </div>
                        
                        <div className="animation">
                            <div className='image-wrapper'>
                                <div className='image-project-management-lifecycle'></div>               
                            </div>
                        </div>

                        <Timeline target={
                            <div className="heading">
                                <h3 className='section-heading-1'> 1. Conception & initiation </h3>
                            </div>
                        }
                        >
                        <Tween
                            from={{ opacity: 0 }}
                            to={{ opacity: 1 }}
                        />
                        </Timeline>

                        <Timeline target={
                            <div className="heading">
                                <h3 className='section-heading-2'> 2. Definition and Planning </h3>
                            </div>
                        }
                        >
                        <Tween
                            from={{ opacity: 0 }}
                            to={{ opacity: 1 }}
                        />
                        </Timeline>

                        <Timeline target={
                            <div className="heading">
                                <h3 className='section-heading-3'> 3. Launch /Execution </h3>
                            </div>
                        }
                        >
                        <Tween
                            from={{ opacity: 0 }}
                            to={{ opacity: 1 }}
                        />
                        </Timeline>
                        <Timeline target={
                            <div className="heading">
                                <h3 className='section-heading-4'> 4. Performance and Control </h3>
                            </div>
                        }
                        >
                        <Tween
                            from={{ opacity: 0 }}
                            to={{ opacity: 1 }}
                        />
                        </Timeline>

                        <Timeline target={
                            <div className="heading">
                                <h3 className='section-heading-5'> 5. Project Close  </h3>
                            </div>
                        }
                        >
                        <Tween
                            from={{ opacity: 0 }}
                            to={{ opacity: 1 }}
                        />
                        </Timeline>
                        
                    </Timeline>
                </div>
            )}
            </Scene>
        </Controller>
        


        <Controller>
            <Scene
                triggerHook="onLeave"
                duration={1000}
                pin
            >
            {(progress) => (
                <div className="section">
                    <Timeline totalProgress={progress} paused>
                    <div className='detailed-project-management-wrapper'>
                <Tween        
                    staggerFrom={{
                        left: 50,
                    }}
                    staggerTo={{
                        left: '25%',
                        ease: 'Back.easeOut',
                    }}
                    stagger={0.15}
                    totalProgress={progress}
                    paused
                >
                    <div className='stagger'>
                        <h3 className='project-management-main-header'> Phases In Detail: </h3>
                    </div>
                    <div className='stagger'>
                        <h3 className='section-heading'> Phase 1 - Conception & initiation </h3>
                        <li className='section-bullet-point'> a. Project Charter </li>
                    </div>
                    <div className='stagger'>
                        <h3 className='section-heading'> Phase 2 - Definition and Planning  </h3>
                        <li className='section-bullet-point'> a. Scope & Budget </li>
                        <li className='section-bullet-point'> b. Work Breakdown Schedule </li>
                        <li className='section-bullet-point'> c. Gantt Chart </li>
                        <li className='section-bullet-point'> d. Communications plan </li>
                        <li className='section-bullet-point'> e. Risk management </li>
                    </div>
                    <div className='stagger'>
                        <h3 className='section-heading'> Phase 3 - Launch /Execution   </h3>
                        <li className='section-bullet-point'> a. Status & Tracking </li>
                        <li className='section-bullet-point'> b. KPI’s </li>
                        <li className='section-bullet-point'> c. Quality </li>
                        <li className='section-bullet-point'> d. Forecasts </li>
                    </div>
                    <div className='stagger'>
                        <h3 className='section-heading'> Phase 4 - Performance and Control   </h3>
                        <li className='section-bullet-point'> a. Objectives </li>
                        <li className='section-bullet-point'> b. Quality Deliverables </li>
                        <li className='section-bullet-point'> c. Effort & Cost Tracking </li>
                        <li className='section-bullet-point'> d. Performance </li>
                    </div>
                    <div className='stagger'>
                        <h3 className='section-heading'> Phase 5 - Performance and Control   </h3>
                        <li className='section-bullet-point'> a. Post Mortem </li>
                            <li className='section-bullet-point'> b. Project Punch list </li>
                            <li className='section-bullet-point'> c. Reporting </li>
                    </div>
                </Tween>
                </div>
                </Timeline>
            </div>
            )}
            </Scene>
        </Controller>

        <Controller>
            <Scene
                triggerHook="onLeave"
                duration={1000}
                pin
            >
            {(progress) => (
                <div className="project-description-1-wrapper">
                    <Timeline totalProgress={progress} paused>
                        <Timeline target={
                            <div className='heading project-descriptions-wrapper'>
                                <h3 className='project-descriptions-header'> PHASE 1: PROJECT INITIATION </h3>
                            </div>
                        }
                        >
                        <Tween
                            from={{ opacity: 0, top: '-10%' }}
                            to={{ opacity: 1, top: '0%' }}
                        />
                        </Timeline>

                        <Timeline target={
                            <div className='heading project-descriptions-wrapper'>
                            <p className='project-descriptions-text-1'>
                            This is the start of the project, and the goal of this phase is to define the project at a broad level. This phase usually begins with a business case. This is when you will research whether the project is feasible and if it should be undertaken. If feasibility testing needs to be done, this is the stage of the project in which that will be completed.
                            </p>
                            <p className='project-descriptions-text-2'>
                            Important stakeholders will do their due diligence to help decide if the project is a “go.” If it is given the green light, you will need to create a project charter or a project initiation document (PID) that outlines the purpose and requirements of the project. It should include business needs, stakeholders, and the business case. Tip: When creating a PID, don’t get too bogged down in technical requirements. Those will be clarified and clearly defined in Phase 2.
                            </p>
                            </div>
                        }
                        >
                        <Tween
                            from={{ opacity: 0, top: '30%' }}
                            to={{ opacity: 1, top: '0%' }}
                        />
                        </Timeline>
                        
                    </Timeline>
                </div>
            )}
            </Scene>
        </Controller>


        <Controller>
            <Scene
                triggerHook="onLeave"
                duration={1000}
                pin
            >
            {(progress) => (
                <div className="project-description-2-wrapper">
                    <Timeline totalProgress={progress} paused>
                        <Timeline target={
                            <div className='heading project-descriptions-wrapper'>
                                <h3 className='project-descriptions-header'> PHASE 2: PROJECT PLANNING </h3>
                            </div>
                        }
                        >
                        <Tween
                            from={{ opacity: 0, top: '-10%' }}
                            to={{ opacity: 1, top: '0%' }}
                        />
                        </Timeline>

                        <Timeline target={
                            <div className='heading project-descriptions-wrapper'>
                            <p className='project-descriptions-text-1'>
                                This phase is key to successful project management and focuses on developing a roadmap that everyone will follow. This phase typically begins with setting goals. Two of the more popular methods for setting goals are S.M.A.R.T. and CLEAR:
                            </p>
                            <p className='project-descriptions-text-2'>
                                S.M.A.R.T. Goals – This method helps ensure that the goals have been thoroughly vetted. It also provides a way to clearly understand the implications of the goal-setting process.
                            </p>
                                <ul className='list'>
                                    <li>
                                        Specific – To set specific goals, answer the following questions: who, what, where, when, which, and why.
                                    </li>
                                    <li>
                                        Measurable – Create criteria that you can use to measure the success of a goal.
                                    </li>
                                    <li>
                                        Attainable – Identify the most important goals and what it will take to achieve them.
                                    </li>
                                    <li>
                                        Realistic – You should be willing and able to work toward a particular goal.
                                    </li>
                                    <li>
                                        Timely – Create a timeframe to achieve the goal.
                                    </li>
                                </ul>
                            
                            <div className='image-smart-goals'></div>     
                            <p className='project-descriptions-text-2'>
                                C.L.E.A.R. Goals – A newer method for setting goals that takes into consideration the environment of today’s fast-paced businesses.
                            </p>
                            <ul className='list'>
                                <li>
                                    Collaborative – The goal should encourage employees to work together.
                                </li>
                                <li>
                                    Limited – They should be limited in scope and time to keep it manageable.
                                </li>
                                <li>
                                    Emotional – Goals should tap into the passion of employees and be something they can form an emotional connection to. This can optimize the quality of work.
                                </li>
                                <li>
                                    Appreciable – Break larger goals into smaller tasks that can be quickly achieved.
                                </li>
                                <li>
                                    Refinable – As new situations arise, be flexible and refine goals as needed.
                                </li>
                            </ul>
                            <p className='project-descriptions-text-2'>    
                                During the project planning phase, the scope of the project is defined, and a project management plan is developed. It involves identifying the cost, quality, available resources, and a realistic timetable. The project plans also includes establishing baselines or performance measures. These are generated using the scope, schedule and cost of a project. A baseline is essential to determine if a project is on track.
                            </p>
                            <p className='project-descriptions-text-2'>
                                At this time, roles and responsibilities are clearly defined, so everyone involved knows what they are accountable for. Here are some of the documents a PM will create during this phase to ensure the project will stay on track:
                            </p>
                            <ul className='list'>
                                <li>
                                    Scope Statement – A document that clearly defines the business need, benefits of the project, objectives, deliverables, and key milestones. A scope statement may change during the project, but it shouldn’t be done without the approval of the project manager and the sponsor.
                                </li>
                                <li>
                                    Work Breakdown Schedule (WBS) –This is a visual representation that breaks down the scope of the project into manageable sections for the team.
                                </li>
                                <li>
                                    Milestones – Identify high-level goals that need to be met throughout the project and include them in the Gantt chart.
                                </li>
                                <li>
                                    Gantt Chart – A visual timeline that you can use to plan out tasks and visualize your project timeline.
                                </li>
                                <li>
                                    Communication Plan – This is of particular importance if your project involves outside stakeholders. Develop the proper messaging around the project and create a schedule of when to communicate with team members based on deliverables and milestones.
                                </li>
                                <li>
                                    Risk Management Plan – Identify all foreseeable risks. Common risks include unrealistic time and cost estimates, customer review cycle, budget cuts, changing requirements, and lack of committed resources.
                                </li>
                            </ul>
                            
                            <p className='project-descriptions-text-2'>
                                Tip: When creating a WBS, work packages shouldn’t be longer than 10 days. Be sure to solicit the input and perspective from team members about their specific tasks.
                            </p>
                            </div>
                        }
                        >
                        <Tween
                            from={{ opacity: 0, top: '30%' }}
                            to={{ opacity: 1, top: '0%' }}
                        />
                        </Timeline>
                        
                    </Timeline>
                </div>
            )}
            </Scene>
        </Controller>

        <Controller>
            <Scene
                triggerHook="onLeave"
                duration={1000}
                pin
            >
            {(progress) => (
                <div className="project-description-3-wrapper">
                    <Timeline totalProgress={progress} paused>
                        <Timeline target={
                            <div className='heading project-descriptions-wrapper'>
                                <h3 className='project-descriptions-header'> PHASE 3: PROJECT EXECUTION </h3>
                            </div>
                        }
                        >
                        <Tween
                            from={{ opacity: 0, top: '-10%' }}
                            to={{ opacity: 1, top: '0%' }}
                        />
                        </Timeline>

                        <Timeline target={
                            <div className='heading project-descriptions-wrapper'>
                            <p className='project-descriptions-text-1'>
                                This is the phase where deliverables are developed and completed. This often feels like the meat of the project since a lot is happening during this time, like status reports and meetings, development updates, and performance reports. A “kick-off” meeting usually marks the start of the Project Execution phase where the teams involved are informed of their responsibilities.
                            </p>
                            <p className='project-descriptions-text-2'>
                                Tasks completed during the Execution Phase include:
                            </p>
                            <ul className='list'>
                                <li>
                                    Develop team
                                </li>
                                <li>
                                    Assign resources
                                </li>
                                <li>
                                    Execute project management plans
                                </li>
                                <li>
                                    Procurement management if needed
                                </li>
                                <li>
                                    PM directs and manages project execution
                                </li>
                                <li>
                                    Set up tracking systems
                                </li>
                                <li>
                                    Task assignments are executed
                                </li>
                                <li>
                                    Status meetings
                                </li>
                                <li>
                                    Update project schedule
                                </li>
                                <li>
                                    Modify project plans as needed
                                </li>
                            </ul>
                            <p className='project-descriptions-text-2'>
                                While the project monitoring phase has a different set of requirements, these two phases often occur simultaneously.
                            </p>
                            </div>
                        }
                        >
                        <Tween
                            from={{ opacity: 0, top: '30%' }}
                            to={{ opacity: 1, top: '0%' }}
                        />
                        </Timeline>
                        
                    </Timeline>
                </div>
            )}
            </Scene>
        </Controller>




        <Controller>
            <Scene
                triggerHook="onLeave"
                duration={1000}
                pin
            >
            {(progress) => (
                <div className="project-description-4-wrapper">
                    <Timeline totalProgress={progress} paused>
                        <Timeline target={
                            <div className='heading project-descriptions-wrapper'>
                                <h3 className='project-descriptions-header'> PHASE 4: PROJECT PERFORMANCE/MONITORING </h3>
                            </div>
                        }
                        >
                        <Tween
                            from={{ opacity: 0, top: '-10%' }}
                            to={{ opacity: 1, top: '0%' }}
                        />
                        </Timeline>

                        <Timeline target={
                            <div className='heading project-descriptions-wrapper'>
                            <p className='project-descriptions-text-1'>
                                This is all about measuring project progression and performance and ensuring that everything happening aligns with the project management plan. Project managers will use key performance indicators (KPIs) to determine if the project is on track. 
                            </p>
                            <p className='project-descriptions-text-2'>
                                A PM will typically pick two to five of these KPIs to measure project performance:
                            </p>
                                <ul className='list'>
                                    <li>
                                        Project Objectives - Measuring if a project is on schedule and budget is an indication if the project will meet stakeholder objectives.
                                    </li>
                                    <li>
                                        Quality Deliverables - This determines if specific task deliverables are being met.
                                    </li>
                                    <li>
                                        Effort and Cost Tracking - PMs will account for the effort and cost of resources to see if the budget is on track. This type of tracking informs if a project will meet its completion date based on current performance.
                                    </li>
                                    <li>
                                        Project Performance - This monitors changes in the project. It takes into consideration the amount and types of issues that arise and how quickly they are addressed. These can occur from unforeseen hurdles and scope changes.
                                    </li>
                                </ul>
                            <p className='project-descriptions-text-2'>
                                During this time, PMs may need to adjust schedules and resources to ensure the project is on track
                            </p>
                            <p className='project-descriptions-text-2'>
                                Tip: Review the business case at the end of each phase and make adjustments to the project plan as needed.
                            </p>
                            </div>
                        }
                        >
                        <Tween
                            from={{ opacity: 0, top: '30%' }}
                            to={{ opacity: 1, top: '0%' }}
                        />
                        </Timeline>
                        
                    </Timeline>
                </div>
            )}
            </Scene>
        </Controller>



        <Controller>
            <Scene
                triggerHook="onLeave"
                duration={1000}
                pin
            >
            {(progress) => (
                <div className="project-description-5-wrapper">
                    <Timeline totalProgress={progress} paused>
                        <Timeline target={
                            <div className='heading project-descriptions-wrapper'>
                                <h3 className='project-descriptions-header'> PHASE 5: PROJECT CLOSURE </h3>
                            </div>
                        }
                        >
                        <Tween
                            from={{ opacity: 0, top: '-10%' }}
                            to={{ opacity: 1, top: '0%' }}
                        />
                        </Timeline>

                        <Timeline target={
                            <div className='heading project-descriptions-wrapper'>
                            <p className='project-descriptions-text-1'>
                                This phase represents the completed project. Contractors hired to work specifically on the project are terminated at this time. Valuable team members are recognized. Some PMs even organize small work events for people who participated in the project to thank them for their efforts. Once a project is complete, a PM will often hold a meeting – sometimes referred to as a “post mortem” – to evaluate what went well in a project and identify project failures. This is especially helpful to understand lessons learned so that improvements can be made for future projects.
                            </p>
                            <p className='project-descriptions-text-2'>
                                Once the project is complete, PMs still have a few tasks to complete. They will need to create a project punch list of things that didn’t get accomplished during the project and work with team members to complete them. Perform a final project budget and prepare a final project report. Finally, they will need to collect all project documents and deliverables and store them in a single place.
                            </p>
                            <p className='project-descriptions-text-2'>
                                Tip: Using a cloud-based software solution is an easy way to collect and save all project documents in one location throughout the life of the project.
                            </p>
                            </div>
                        }
                        >
                        <Tween
                            from={{ opacity: 0, top: '30%' }}
                            to={{ opacity: 1, top: '0%' }}
                        />
                        </Timeline>
                        
                    </Timeline>
                </div>
            )}
            </Scene>
        </Controller>



        
        </div>
    
    );
}

export default withAuthProvider(Resources);