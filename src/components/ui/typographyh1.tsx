interface H1Props {
    text: string;
}

export default function H1({ text }: H1Props) {
    return (
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance text-white">
            {text}
        </h1>
    );
}