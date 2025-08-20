import moment from 'moment';


function chatmessage({ text, logo, email, user, name, createdAt }) {

    function showTime(date) {
        if (!date) return "…";   
        const jdDate= date.toDate? date.toDate() : date;
        return  new Intl.DateTimeFormat(undefined, {
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        }).format(jdDate);

    }

    return (
        <div className='chat-messages' >
            <div className={`d-flex  ${email === user.user.email && 'justify-content-end'}`}>
                {
                    user.user.email === email ? (
                        <span className='message-right justify-content-end' >
                            <span className="firsttext d-flex justify-content-end">
                                <span className='message-name '>{name}</span>
                                <p className="message-name">({showTime(createdAt)})</p>

                                {logo && <img src={logo} alt='userlogo' className='logo-icon' />}
                            </span>

                            <div className='text'><span className='message-text'>{text}</span></div>

                        </span>
                    ) : (
                        <>
                            <span className='message-left justify-content-start' >
                                <span className="firsttext d-flex justify-content-start">
                                    {logo && <img src={logo} alt='userlogo' className='logo-icon' />}
                                    <span className='message-name '>{name}</span>
                                <span className="message-name">({showTime(createdAt)})</span>

                                </span>

                                <div className='text'><span className='message-text'>{text}</span></div>
                            </span>

                        </>)

                }
            </div>
        </div>

    );
}

export default chatmessage;