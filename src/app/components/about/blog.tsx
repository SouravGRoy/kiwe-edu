import Image from "next/image";

const posts = [
    {
        id: 1,
        title: "Dedicated Faculty with a Passion for Teaching",
        href: "#",
        description:
            "Our institute’s dedicated, knowledgeable teachers ensure high-quality education, fostering growth and individual student success.",
        date: "Mar 16, 2020",
        datetime: "2020-03-16",
        category: { title: "Institute", href: "#" },
        author: {
            name: "Mr. Yowan Pradhan",
            role: "Google Scholar, DFA,B.Sc/M.Sc(Mathematics),B.Ed",
            href: "#",
            imageUrl: "/images/person.jpg",
        },
    },
    {
        id: 2,
        title: "Experienced Educators Committed to Student Success",
        href: "#",
        description:
            "Our institute boasts a diverse team of experienced educators who are committed to student success. With backgrounds in various fields, our teachers provide comprehensive and engaging instruction. ",
        date: "Mar 16, 2020",
        datetime: "2020-03-16",
        category: { title: "Institute", href: "#" },
        author: {
            name: "Mr. Yogdeep Pradhan:",
            role: "B.Sc (Physics), M.Sc ( Physics), B.Ed",
            href: "#",
            imageUrl: "/images/person.jpg",
        },
    },
    {
        id: 3,
        title: "Inspiring Mentors Shaping the Future Leaders",
        href: "#",
        description:
            "Our teachers are inspiring mentors, creating a supportive learning atmosphere and guiding students towards excellence and leadership.",
        date: "Mar 16, 2020",
        datetime: "2020-03-16",
        category: { title: "Institute", href: "#" },
        author: {
            name: "Ms. Sudakshina Hangma Sereng (Saesay maam)",
            role: "B.Sc (Microbiology), M.Sc (Microbiology), B.Ed, West Bengal State Eligibility Test (WBSET)",
            href: "#",
            imageUrl: "/images/person.jpg",
        },
    },
    {
        id: 4,
        title: " Expert Teachers Cultivating Future Innovators",
        href: "#",
        description:
            "Our expert teachers cultivate future innovators with engaging lessons and personalized guidance, ensuring every student's success and growth.",
        date: "Mar 16, 2020",
        datetime: "2020-03-16",
        category: { title: "Institute", href: "#" },
        author: {
            name: ". Ms. Dhaseen Lepcha, Ms. Nivdita Sujee, Ms. Resha Yonjan, Mr. Surajeet Mandal, Mr. Khan ",
            role: "",
            href: "#",
            imageUrl: "/images/person.jpg",
        },
    },
    // {
    //   id: 5,
    //   title: "Dedicated Faculty with a Passion for Teaching",
    //   href: "#",
    //   description:
    //     "Our institute’s dedicated, knowledgeable teachers ensure high-quality education, fostering growth and individual student success.",
    //   date: "Mar 16, 2020",
    //   datetime: "2020-03-16",
    //   category: { title: "Institute", href: "#" },
    //   author: {
    //     name: "Ms. Dhaseen Lepcha",
    //     href: "#",
    //     imageUrl: "/images/person.jpg",
    //   },
    // },
    // {
    //   id: 6,
    //   title: "Experienced Educators Committed to Student Success",
    //   href: "#",
    //   description:
    //     "Our institute boasts a diverse team of experienced educators who are committed to student success. With backgrounds in various fields, our teachers provide comprehensive and engaging instruction. ",
    //   date: "Mar 16, 2020",
    //   datetime: "2020-03-16",
    //   category: { title: "Institute", href: "#" },
    //   author: {
    //     name: "Ms. Nivdita Sujee",

    //     href: "#",
    //     imageUrl: "/images/person.jpg",
    //   },
    // },
    // {
    //   id: 7,
    //   title: "Inspiring Mentors Shaping the Future Leaders",
    //   href: "#",
    //   description:
    //     "Our teachers are inspiring mentors, creating a supportive learning atmosphere and guiding students towards excellence and leadership.",
    //   date: "Mar 16, 2020",
    //   datetime: "2020-03-16",
    //   category: { title: "Institute", href: "#" },
    //   author: {
    //     name: " Ms. Resha Yonjan",

    //     href: "#",
    //     imageUrl: "/images/person.jpg",
    //   },
    // },
    // {
    //   id:8,
    //   title: " Expert Teachers Cultivating Future Innovators",
    //   href: "#",
    //   description:
    //     "Our expert teachers cultivate future innovators with engaging lessons and personalized guidance, ensuring every student's success and growth.",
    //   date: "Mar 16, 2020",
    //   datetime: "2020-03-16",
    //   category: { title: "Institute", href: "#" },
    //   author: {
    //     name: " Mr. Khan ",
    //     role: "",
    //     href: "#",
    //     imageUrl: "/images/person.jpg",
    //   },
    // },
];

export default function Blog() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-4">
                <div className="mx-auto mt-10 grid grid-cols-1 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:grid-cols-3 lg:gap-8">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="flex flex-col items-start justify-between rounded-md border p-2 shadow-lg"
                        >
                            <div className="flex items-center gap-x-4 text-xs">
                                <time
                                    dateTime={post.datetime}
                                    className="text-gray-500"
                                >
                                    {post.date}
                                </time>
                                <a
                                    href={post.category.href}
                                    className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    {post.category.title}
                                </a>
                            </div>
                            <div className="group">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href={post.href}>
                                        <span className="" />
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                    {post.description}
                                </p>
                            </div>
                            <div className="mt-8 flex items-center gap-x-4">
                                <Image
                                    alt={"image"}
                                    width={1000}
                                    height={1000}
                                    src={post.author.imageUrl}
                                    className="h-10 w-10 rounded-full bg-gray-50"
                                />
                                <div className="text-sm leading-6">
                                    <p className="break-words font-semibold text-gray-900">
                                        <a href={post.author.href}>
                                            <span className="inset-0" />
                                            {post.author.name}
                                        </a>
                                    </p>
                                    <p className="break-words text-gray-600">
                                        {post.author.role}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
