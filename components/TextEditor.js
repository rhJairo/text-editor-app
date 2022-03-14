import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { useState } from "react";
import { db } from "../firebase";
import { useRouter } from "next/router";
import { convertToRaw, convertFromRaw } from "draft-js";
import { useSession } from "next-auth/client";

// import { Editor } from "react-draft-wysiwyg";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);
function TextEditor() {
  const [session] = useSession()
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const router = useRouter();
  const { id } = router.query;

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    db.collection("userDocs")
      .doc(session.user.email)
      .collection("docs")
      .doc(id)
      .set(
        {
          editorState: convertToRaw(editorState.getCurrentContent()),
        },
        {
          merge: true,
        }
      );
  };
  return (
    <div className="bg-[#dfdfdf] min-h-screen pg-16">
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
        editorClassName="mt-6 p-10 bg-white shadow-lg max-w-5xl mx-auto mb-12 border"
      />
    </div>
  );
}
export default TextEditor;
