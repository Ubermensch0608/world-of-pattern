import { useRef } from "react";
import { PlayCommand } from "../modules/command/PlayCommand";
import { CircleCommand } from "../modules/command/CircleCommand";
import { BoxCommand } from "../modules/command/BoxCommand";
import { TextCommand } from "../modules/command/TextCommand";
import { ClearCommand } from "../modules/command/ClearCommand";

export const Canvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const playCommand = new PlayCommand(canvasRef.current!);

    return (
        <div>
            <canvas
                style={{
                    width: "400px",
                    height: "400px",
                    border: "1px dashed black",
                }}
                ref={canvasRef}
            />
            <div>
                <button
                    onClick={() => {
                        if (canvasRef.current) {
                            playCommand?.addCommand(
                                new CircleCommand(canvasRef.current, 100, 100, 50)
                            );
                        }
                    }}
                >
                    CircleCommand
                </button>
                <button
                    onClick={() => {
                        if (canvasRef.current) {
                            playCommand?.addCommand(
                                new BoxCommand(canvasRef.current, 100, 100, 50, 50)
                            );
                        }
                    }}
                >
                    BoxCommand
                </button>
                <button
                    onClick={() => {
                        if (canvasRef.current) {
                            playCommand?.addCommand(
                                new TextCommand(canvasRef.current, 100, 100, 16, "Hello World")
                            );
                        }
                    }}
                >
                    TextCommand
                </button>
                <button
                    onClick={() => {
                        if (canvasRef.current) {
                            playCommand?.addCommand(new ClearCommand(canvasRef.current));
                        }
                    }}
                >
                    ClearCommand
                </button>
                <button
                    onClick={() => {
                        playCommand?.run();
                        console.log(playCommand?.commands);
                    }}
                >
                    실행
                </button>
            </div>
        </div>
    )
}