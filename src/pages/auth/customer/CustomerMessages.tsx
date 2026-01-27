import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomerNavbar from './components/CustomerNavbar';

const CustomerMessages = () => {
    const { id } = useParams(); // ID kept for future use
    console.log("Chat ID:", id); // Use it to suppress warning or just ignore. Using console.log is easy.
    // Mock Data for the specific chat/job
    const chatData = {
        professional: {
            name: "Abebe Tesfaye",
            role: "Electrician Specialist",
            status: "Online",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPPJ8U1L7qqaItFyqmJpq01IwDDIKxUNRCjpZtm8UeeaiggSa5exgEkguPz4Yq8E106veihs9TVUGq63QMTja3KkjqviTfiHrA9dDjMs4sd7XEND8aLMrdhFU6_ISeqDozTdyTTcHgNtOhjzmpsXqGcNvEmLDe-yDtAxSbV0iGwCD0woh4ljIFLma4mrh3nflxCgTJza0CerSP477c9RKCQVF31SGcEakU0oKvfaQTZ_9aOtcTmBI8CyUTGI094pt3J23lhoN_nQ"
        },
        job: {
            title: "Electrical Repair",
            price: "Starting from 350 Birr",
            date: "May 24, 2024 • 10:00 AM",
            location: "Bole, Addis Ababa",
            steps: [
                { title: "Request Sent", date: "May 22", status: "completed" },
                { title: "Request Accepted", date: "May 23", status: "completed" },
                { title: "Booking & Payment", status: "current", actionRequired: true },
                { title: "Job Completed", status: "upcoming" }
            ]
        },
        messages: [
            { id: 1, sender: "pro", text: "Hello! I've arrived at the location and I am ready to start the electrical inspection.", time: "10:15 AM", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjXYmKvIudUsk7DWEdsBTw34HZErhRVN_C3kgyZ3OkkgJhf31-uUViDUceyV73I731HRoKVB-pRKr2DG9J7Og7pe7P_UYx8YZGlo98dYur21Z-8KMnlMn785wIJ1yeZMHz4AE_5NtJGb14GvO-7uEgtGHmgPRdlyaDkzHPwMFE2M9yUvjHpNTKQnYmWmUOAZrA8uYvGntDkWo_LtlEYoa1nZb7HLGh5RPooJUzvw1q4-lpSgqXPkXxd-EfQhiTwcv3og9jgAQpEQ" },
            { id: 2, sender: "user", text: "Great, thanks for being on time Abebe! I am coming down to meet you now.", time: "10:17 AM", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8Fw3j2H98GA4qxYUR1dqCSlfp64XnnXh1SQfu-QoGDIRDCdqzW9A0cXoCEWELXSnL8aTqX5ru4Arn22jAmNKVqXziC-8YiKr5xqNPqQ1dqAesQ2-rpiD6S3KczNHBsC6GH1yp8MejTY1aiU9QDiE-J_4w2fyXLGyh6fLfX314j-kW_aVppgyhOqPF9J87z3KstL9Nq2A0XRaZuMRzwUWyPEIGkf_VLsuESYOHzsJrWS2l3U6YO-x1WnBmc7VdhatdCbTn1_Q6TA" },
            { id: 3, sender: "pro", text: "Perfect. I have my tools ready. Shall we check the main circuit breaker first?", time: "10:20 AM", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAj9a1Ea7zwl7DRvGyxOyF7wG4barrhc0lBhhgIrxccY8WglfKkNIRsMvPoF7Cy2p-jfUMwTAvQO_QV3l5U85PTYLLH09Civ9lwbjEFJlX_KKhM_wZ7twdxsGTLq9oxNDZY08UAVESxx0m7N57D5kcyLDdOaF1RPLQV2Sylsya4ckCwyj4LZ2Cq5vCaf_rGK7MuQ4jix0lHIDglPsTYOuExDxr0nw6_xi2ySsdchRir1w-z9u1csDzf7V653FCC79Htz-er9BKtA" },
            { id: 4, sender: "user", text: "Yes, that makes sense. It's been tripping since yesterday.", time: "10:21 AM • Read", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPzF6B7B1jM2pYCXD_IHo81nmInhDcjUFPn4V5VdvsOnnWwc05g1U-VxSOgukFOQepy4IHD5gqKQRoz4Z2IFwPF5dExrYjzW2wg-Owu61w-1n8rP2FW4aBvN5DovdkhzXIRxGVC2ezh09JrI07-6fMfiOY7qqif0ik__nGeARfTJj9JdCgCKOQSdvQfZst-0VuTVPd522DfOUQM3P-K_JS48_sz9b7sYXfxH0d_AUyiPIguFAW0kv5EKVHz5amFXOMN5Qd3tuzgA" }
        ]
    };

    const [messageInput, setMessageInput] = useState("");

    return (
        <div className="flex flex-col h-screen bg-background-light dark:bg-background-dark font-display text-text-primary dark:text-white overflow-hidden">
            <CustomerNavbar />

            <main className="flex flex-col xl:flex-row w-full max-w-[1440px] mx-auto px-4 md:px-10 py-6 gap-6 flex-1 overflow-hidden items-stretch">
                {/* Left Column: Messaging */}
                <div className="flex flex-col flex-1 w-full bg-white dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 relative z-0 h-full overflow-hidden">
                    {/* Chat Header */}
                    <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-card-dark z-10">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <div
                                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 border-2 border-white dark:border-slate-700 shadow-sm"
                                    style={{ backgroundImage: `url('${chatData.professional.image}')` }}
                                ></div>
                                <div className="absolute bottom-0 right-0 size-3.5 bg-green-500 border-2 border-white dark:border-slate-700 rounded-full"></div>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-text-primary dark:text-white text-base font-bold">{chatData.professional.name}</h3>
                                <span className="text-text-secondary dark:text-gray-400 text-xs font-medium">{chatData.professional.status} • {chatData.professional.role}</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="p-2 text-text-secondary dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                                <span className="material-symbols-outlined">call</span>
                            </button>
                            <button className="p-2 text-text-secondary dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                                <span className="material-symbols-outlined">more_vert</span>
                            </button>
                        </div>
                    </div>

                    {/* Scrollable Chat Area */}
                    <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                        {/* Date Divider */}
                        <div className="flex justify-center my-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-text-secondary dark:text-gray-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">Today</span>
                        </div>

                        {chatData.messages.map((msg) => (
                            <div key={msg.id} className={`flex items-end gap-3 max-w-[80%] ${msg.sender === 'user' ? 'justify-end self-end' : ''}`}>
                                {msg.sender === 'pro' && (
                                    <div
                                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-8 h-8 shrink-0"
                                        style={{ backgroundImage: `url('${msg.avatar}')` }}
                                    ></div>
                                )}

                                <div className={`flex flex-col gap-1.5 ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                                    <div className={`text-sm font-normal leading-relaxed rounded-xl px-4 py-3 ${msg.sender === 'user'
                                        ? 'rounded-br-none bg-primary text-white'
                                        : 'rounded-bl-none bg-slate-100 dark:bg-slate-800 text-text-primary dark:text-white'
                                        }`}>
                                        {msg.text}
                                    </div>
                                    <span className={`text-text-secondary dark:text-gray-400 text-[11px] ${msg.sender === 'user' ? 'mr-1' : 'ml-1'}`}>{msg.time}</span>
                                </div>

                                {msg.sender === 'user' && (
                                    <div
                                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-8 h-8 shrink-0 border border-slate-200 dark:border-slate-700"
                                        style={{ backgroundImage: `url('${msg.avatar}')` }}
                                    ></div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Chat Bottom Bar */}
                    <div className="p-4 bg-white dark:bg-card-dark border-t border-slate-200 dark:border-slate-800 rounded-b-xl">
                        <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-2">
                            <button className="text-text-secondary dark:text-gray-400 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">attach_file</span>
                            </button>
                            <input
                                className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-text-primary dark:text-white placeholder-text-secondary dark:placeholder-gray-400"
                                placeholder="Type your message..."
                                type="text"
                                value={messageInput}
                                onChange={(e) => setMessageInput(e.target.value)}
                            />
                            <button className="flex items-center justify-center bg-primary text-white rounded-lg px-4 py-2 gap-2 hover:opacity-90 transition-opacity">
                                <span className="text-sm font-bold">Send</span>
                                <span className="material-symbols-outlined text-sm">send</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column: Job Status */}
                <div className="w-full xl:w-[350px] flex flex-col gap-6 shrink-0 h-full overflow-y-auto pr-2 custom-scrollbar">
                    {/* Job Summary Card */}
                    <div className="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-5">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Active Job</h4>
                                <h2 className="text-lg font-bold text-text-primary dark:text-white">{chatData.job.title}</h2>
                            </div>
                            <span className="text-lg font-bold text-text-primary dark:text-white whitespace-nowrap">{chatData.job.price}</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2 text-sm text-text-secondary dark:text-gray-400">
                                <span className="material-symbols-outlined text-base">calendar_today</span>
                                <span>{chatData.job.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-text-secondary dark:text-gray-400">
                                <span className="material-symbols-outlined text-base">location_on</span>
                                <span>{chatData.job.location}</span>
                            </div>
                        </div>
                    </div>

                    {/* Job Status Stepper */}
                    <div className="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                        <h3 className="text-base font-bold text-text-primary dark:text-white mb-8">Job Status</h3>
                        <div className="relative flex flex-col gap-10">
                            {chatData.job.steps.map((step, index) => (
                                <div key={index} className="flex gap-4 relative">
                                    {index < chatData.job.steps.length - 1 && (
                                        <div className={`absolute left-3 top-6 h-10 w-0.5 ${step.status === 'completed' ? 'bg-green-500' : 'bg-slate-200 dark:bg-slate-700'
                                            }`}></div>
                                    )}

                                    {step.status === 'completed' ? (
                                        <div className="size-6 bg-green-500 rounded-full flex items-center justify-center z-10 text-white">
                                            <span className="material-symbols-outlined text-sm font-bold">check</span>
                                        </div>
                                    ) : step.status === 'current' ? (
                                        <div className="size-6 border-2 border-primary bg-white dark:bg-card-dark rounded-full flex items-center justify-center z-10">
                                            <div className="size-2 bg-primary rounded-full"></div>
                                        </div>
                                    ) : (
                                        <div className="size-6 border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-card-dark rounded-full z-10"></div>
                                    )}

                                    <div className="flex flex-col">
                                        <span className={`text-sm font-bold ${step.status === 'current' ? 'text-primary' :
                                            step.status === 'upcoming' ? 'text-text-secondary dark:text-gray-400' :
                                                'text-text-primary dark:text-white'
                                            }`}>
                                            {step.title}
                                        </span>
                                        <span className={`text-xs ${step.status === 'current' ? 'text-primary font-medium' : 'text-text-secondary dark:text-gray-400'
                                            }`}>
                                            {step.status === 'completed' ? `Completed • ${step.date}` :
                                                step.status === 'current' ? 'Action Required' :
                                                    'Pending finish'}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-10 py-3 bg-primary text-white text-sm font-bold rounded-xl hover:opacity-90 transition-opacity">
                            Confirm & Release Payment
                        </button>
                        <p className="text-[11px] text-text-secondary dark:text-gray-400 text-center mt-3">Funds are held securely by Fix-Link</p>
                    </div>

                    {/* Helper/Support */}
                    <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">info</span>
                        <p className="text-xs text-primary/80 font-medium leading-relaxed">Need help? Abebe is a verified Pro with a 4.9 rating.</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CustomerMessages;
