import { useReducer, useRef, useEffect, useState } from "react";
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import BlogReducer, { initialState, blogType } from "../../../states/blog-reducer/reducer";
const JoditEditor = dynamic(() => import('jodit-react'), {ssr: false}) 
import { Input, Button, Loading, Modal } from '@nextui-org/react';
import { getUserDetails } from "../../../services/user";
import { UPDATE_HEADING, UPDATE_TITLE, UPDATE_DESCRIPTION, UPDATE_READING_TIME, UPDATE_TAGS } from "../../../states/blog-reducer/action";
import { publishContent } from "../../../services/content";
import { useRouter } from "next/router";
import BlogPreview from "../../home/components/BlogPreview";
const WriteContentComponent = () => {
    const router = useRouter();
    const [previewModal, setPreviewModal] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState<any>();
    const id = useRef<any>(null);
    const editor = useRef(null);
    const [state, dispatch] = useReducer(BlogReducer, initialState);
    const disabled = state?.title === '' || state?.heading === '' || state?.description === '' || state?.id === '';
    const publish = async () => {
        setLoading(true);
        const responseStatus = await publishContent(state);
        if ([200, 201].includes(responseStatus)) router.push('/home')
        setLoading(false);
        return;
    }
    const fetchUser = async (uuid: string) => {
        try {
            const response = await getUserDetails(uuid);
            setUser(response[0]);
        } catch (e) { console.error({ e }) }
    }
    useEffect(() => {
        id.current = JSON.parse(localStorage.getItem('session') as string)?.session?.user?.id;
        fetchUser(id.current);
    }, [])
    const preview = () => {
        setPreviewModal(true);
    }
    // const config = useMemo(
    // 	{
    // 		readonly: false, // all options from https://xdsoft.net/jodit/doc/,
    // 		placeholder: placeholder || 'Start typings...'
    // 	},
    // 	[placeholder]
    // );

    return (
        <ParentContainer>
            <Input bordered label="Title" color="secondary" helperColor="secondary" placeholder="Title" onChange={(e) => dispatch({ type: UPDATE_TITLE, payload: { title: e.target.value, id: id.current, publisherName: user?.fullName } })} className='title' />
            <Input bordered label="Heading" color="secondary" helperColor="secondary" value={state?.heading} placeholder="Heading" onChange={(e) => dispatch({ type: UPDATE_HEADING, payload: e.target.value })} className='title' />
            <label>Content</label>
            <JoditEditor
                ref={editor}
                value={state?.description}
                // tabIndex={1} // tabIndex of textarea
                onChange={newContent => dispatch({ type: UPDATE_DESCRIPTION, payload: newContent })}
                className='description'
            />
            <Input bordered color="secondary" label="Reading time (in minutes)" helperColor="secondary" value={state?.readingTime} type="number" placeholder="Reading time (in minutes)" onChange={(e) => dispatch({ type: UPDATE_READING_TIME, payload: e.target.value })} className='title' />
            <Input bordered color="secondary" label="add comma saperated tags, for eg. education, tech" helperColor="secondary" value={state?.tags.map((i: any) => i)} placeholder="add comma saperated tags, for eg. education, tech" onChange={(e) => dispatch({ type: UPDATE_TAGS, payload: e.target.value.split(',') })} className='title' />
            <div className="buttons">
                <Button className="btn" flat color='secondary' onClick={preview} disabled={disabled}>
                    Preview
                </Button>
                <Button className="btn" flat color='secondary' onClick={publish} disabled={disabled}>
                    {loading && <Loading type="points" color="currentColor" size="sm" />}  Publish
                </Button>
            </div>
            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={previewModal}
                onClose={() => setPreviewModal(false)}
                width="80%"
            >
                <BlogPreview data={state} />
            </Modal>
        </ParentContainer>
    );

}

export default WriteContentComponent;

const ParentContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .title {
        height: 60px;
        font-size: 30px;
    }
    .description {
        height: 120px;
    }
   .buttons{
    display: flex;
    gap: 1rem;
    width: 100%;
    .btn {
        width: 100%;
    }
   }
`;