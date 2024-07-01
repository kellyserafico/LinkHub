import EditContentInput from '../components/EditContentInput';
import EditLink from '../components/EditLink';
import Profile from '../components/Profile';
import {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
function Edit() {
  const [LinkTitle, setLinkTitle] = useState("Instagram");
  return (
    <div className="w-screen h-screen bg-dark flex flex-row items-center justify-evenly px-12">
      <section className="flex flex-col bg-white w-[150px] h-[500px] rounded-[12px]"></section>
      <section className="p-5 flex flex-col items-center font-medium bg-white w-[500px] h-[880px] rounded-[40px]">
        <h1 className="text-[40px]">Edit Content</h1>
        <EditLink title="Link #1"/>
        <div className="flex flex-row w-full border-[1px] rounded-[40px] items-center justify-between p-[15px]">
          <p className="font-semibold text-[15px]">Add Link</p>
          <FontAwesomeIcon icon={faPlus} className="ml-2" />
        </div>
      </section>
      <section className="flex flex-col bg-white w-[650px] h-[880px] rounded-[40px]">
        <Profile/>
      </section>
    </div>
  );
}

export default Edit;