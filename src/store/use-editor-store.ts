import{create} from "zustand";
import { type Editor } from "@tiptap/react";

 // Định nghĩa giao diện (interface) cho trạng thái của Editor
interface EditorState {
  editor: Editor | null;
  setEditor: (editor: Editor | null) => void;
}

// Khởi tạo store Zustand
export const useEditorStore = create<EditorState>((set) => ({
  // Trạng thái ban đầu
  editor: null,

  // Hàm để cập nhật trạng thái editor
  setEditor: (editor) => set({ editor }),
}));