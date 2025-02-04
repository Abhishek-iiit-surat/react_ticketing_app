import React, { useRef } from 'react'
import sanitizeHtml from "sanitize-html"
import ContentEditable from 'react-contenteditable';
import { useCallback,useState } from 'react';
function Discussion() {
    const discussionBox=useRef(null)
    const [content, setContent] = useState("")
    const onContentChange = useCallback(evt => {
		const sanitizeConf = {
			allowedTags: ["b", "i", "a", "p"],
			allowedAttributes: { a: ["href"] }
		};

		setContent(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf))
	}, [])
    return (
		<ContentEditable
			onChange={onContentChange}
			onBlur={onContentChange}
			html={content} 
            className='p-2 h-[40%] w-[90%] rounded-md border border-black pb-2 focus:outline-none focus:border-2'
            />
	)
}

export default Discussion
