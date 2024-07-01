import React from 'react';
import EditContentInput from './EditContentInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function EditLink({title}){
    return (
        <details className="flex flex-col w-full border-[1px] rounded-[40px] align-center flex-wrap">
          <summary className="text-[15px] p-[15px]">
            Link #1
            <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
            </summary>
          <EditContentInput label="Link Title" value={"Instagram"}/>
          <EditContentInput label="URL" value={"instagram.com"}/>
          <EditContentInput label="Text Color" value={"#000000"}/>
          <EditContentInput label="Background Color" value={"#FFFFFF"}/>
        </details>
    );
}

export default EditLink;
