import { ReactNode } from "react";

//title? = means this is optional 

type SectionProps = {
    title?: string,
    children: ReactNode
};

const Section = ({children, title = 'Subheading'}: SectionProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}

export default Section