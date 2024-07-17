import { EditorInfo } from './EditorInfo'
import { EditorMenuBar } from './EditorMenu'

export type EditorHeaderProps = {
  characters: number
  words: number
  editor: any
}

export const EditorHeader = ({ characters, words, editor }: EditorHeaderProps) => {
  return (
    <div className="flex flex-row items-center justify-between flex-none py-2 pl-6 pr-3 text-black bg-white border-b border-neutral-200 dark:bg-black dark:text-white dark:border-neutral-800">
      <EditorMenuBar editor={editor} />
      <EditorInfo characters={characters} words={words} />
    </div>
  )
}
