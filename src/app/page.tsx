import React from 'react'

const page = () => {
    return (
        <div><figure className="md:flex bg-green-300 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-80 h-81 rounded-full mx-auto" src="/Screenshot (8).png" alt="" width="384" height="512"/>
        <div className="pt-10 md:p-12 text-center md:text-left space-y-10">
          <blockquote>
            <p className="text-lg font-medium">
              “Meet me I am Choudary Umar Khalid.As a Chartered Accountant, I possess expertise in financial management, taxation, and auditing. My professional journey has equipped me with a strong foundation in accounting principles, financial analysis, and business acumen. I have honed my skills through rigorous academic training and practical experience, enabling me to provide valuable insights and services to clients. My expertise includes financial statement preparation, tax planning, and compliance, as well as auditing and assurance services. I am committed to maintaining the highest standards of professionalism, integrity, and ethics in my work, and I am dedicated to helping individuals and organizations achieve their financial goals.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              CHOUDARY UMAR KHALID
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Chartered Accountant, Rahim Yar Khan
            </div>
          </figcaption>
        </div>
      </figure></div>
    )
}

export default page