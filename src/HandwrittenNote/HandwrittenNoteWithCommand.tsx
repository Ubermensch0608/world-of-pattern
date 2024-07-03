import { useState } from "react"
import { HandwrittenNoteService } from "./HandwrittenNote.service"

export const HandwrittenNoteWithCommand = () => {
    const [command] = useState(new HandwrittenNoteService())

    return (
        <section>
            <h2>툴바</h2>
            <button onClick={() => { command.do('VisibleCommand') }}>보이기</button>
            <button onClick={() => { }}>뒤로</button>
            <button onClick={() => { }}>앞으로</button>
            <button onClick={() => { command.do('PenWriteCommand') }}>펜 필기</button>
            <button onClick={() => { command.do('HighlighterCommand') }}>형광펜 필기</button>
            <button onClick={() => { command.do('EraseCommand') }}>지우개</button>
            <button onClick={() => { command.do('EraseAllCommand') }}>모두 지우기</button>
        </section>
    )
}