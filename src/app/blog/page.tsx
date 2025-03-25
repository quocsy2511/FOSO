"use client";
import CardVertical from "@/components/card/CardVertical";
import Main from "@/components/layout/Main";
import ReactBlog from "@/components/rate/Rating";
import Social from "@/components/socical/Social";
import Clock from "@/components/svg/Clock";
import Collap from "@/components/svg/Collap";
import DateTime from "@/components/svg/DateTime";
import Heart from "@/components/svg/Heart";
import Hushed from "@/components/svg/Hushed";
import Like from "@/components/svg/Like";
import Pouting from "@/components/svg/Pouting";
import StarStruck from "@/components/svg/StarStruck";
import StartContent from "@/components/svg/StartContent";
import Yawning from "@/components/svg/Yawning";
import Image from "next/image";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import content from "@/data/contentBlog.json";
import BlogCard from "@/components/card/BlogCard";

const fiveS = [
  { term: "Seiri", meaning: "Ngăn nắp" },
  { term: "Seiso", meaning: "Sạch sẽ" },
  { term: "Seiton", meaning: "Trật tự" },
  { term: "Shitsuke", meaning: "Kỷ luật" },
  { term: "Seiketsu", meaning: "Tiêu chuẩn hóa" },
];
type ImageBlogProps = {
  src: string;
  subtitle: string;
  className?: string;
};

const ImageBlog = ({ src, subtitle, className }: ImageBlogProps) => {
  return (
    <div className="w-full">
      <div
        className={twMerge(
          "h-[600px] w-full relative rounded-lg overflow-hidden mb-2",
          className
        )}
      >
        <Image src={src} fill alt={src} className="object-cover" />
      </div>
      <p className="text-base text-typo-gray-3 font-normal text-center ">
        {subtitle}
      </p>
    </div>
  );
};

type SectionTitleProps = {
  title: string;
  description: string;
  classNameTitle?: string;
  classNameDes?: string;
};
const SectionTitle = ({
  description,
  title,
  classNameDes,
  classNameTitle,
}: SectionTitleProps) => {
  return (
    <div>
      <h3
        className={twMerge(
          "font-extrabold text-xl text-backgroundColor-green-2 mb-4",
          classNameTitle
        )}
      >
        {title}
      </h3>
      <p
        className={twMerge(
          "font-medium text-base text-typo-black-4 ",
          classNameDes
        )}
      >
        {description}
      </p>
    </div>
  );
};

const Blog = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Main>
      <div className="w-full relative">
        <div className="flex- flex-row justify-center items-center mb-12 max-w-[1440px] mx-auto mdd:hidden">
          <span className="text-sm font-normal text-typo-black-2">
            Trang chủ {">"}{" "}
          </span>
          <span className="text-sm font-normal text-typo-black-2">
            Tài nguyên {">"}
          </span>
          <span className="text-sm font-normal text-typo-black-2">
            {" "}
            Blog {">"}
          </span>
          <span className="text-sm font-semibold text-typo-black-3">
            {" "}
            Quản Lý Sản Xuất
          </span>
        </div>
        {/* content */}
        <div className="max-w-[1440px] mx-auto flex flex-row justify-between items-start gap-x-8 ">
          {/* right */}
          <div className="flex flex-col md:w-[70%] mdd:w-full mdd:px-1">
            <div className="rounded-lg bg-backgroundColor-blue px-2 py-1 w-fit mb-4">
              <p className="font-medium text-xs text-typo-blue">
                Quản Lý Sản Xuất
              </p>
            </div>

            <h1 className="text-typo-black-3 font-extrabold text-4xl mb-4">
              Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết
            </h1>

            {/* card */}
            <div className="flex flex-col gap-y-6 w-full">
              {/* author */}
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-x-3">
                  <div className="rounded-full bg-white border border-[#F1F5F7] p-4">
                    <Image
                      src="/images/logoPartten.png"
                      alt="logo"
                      height={32}
                      width={33}
                    />
                  </div>

                  <div className="flex flex-col">
                    <p className="font-medium text-[14px] text-typo-gray-3">
                      Tác giả
                    </p>
                    <h3 className="text-base font-bold text-typo-gray-1">
                      FOSO Creator
                    </h3>
                  </div>
                </div>

                <div className="flex flex-row items-center justify-start ">
                  <div className="flex flex-row justify-start items-center border-r border-r-[#D9E1E7] md:pr-6 pr-1 gap-x-2">
                    <DateTime />
                    <p className="font-medium text-base text-typo-gray-3 mdd:text-xs">
                      Cập nhập vào 17/11/2922
                    </p>
                  </div>

                  <div className="flex flex-row justify-start items-center md:pl-6 pl-1 gap-x-2 mdd:hidden">
                    <Clock />
                    <p className="font-medium text-base text-typo-gray-3">
                      10 phút đọc
                    </p>
                  </div>
                </div>
              </div>

              {/* image */}
              <ImageBlog
                src="/images/blogCard.png"
                subtitle=" Quy trình 5s là gì?"
              />

              <div className="px-[65px] pb-8 pt-4 relative">
                <p className="font-medium italic text-typo-gray-1 text-xl text-center">
                  Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì?
                  Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả
                  lời cho bạn thông tin chi tiết về mô hình này cũng như yếu tố
                  tạo nên thành công của quy trình bạn nhé.
                </p>
                <div className="absolute top-0 left-[12px]">
                  <StartContent />
                </div>
              </div>
            </div>

            {/* content */}
            <div className="flex flex-col gap-y-5">
              {/* section1 */}
              <section id="section1" className="space-y-5">
                <SectionTitle
                  description="  Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong
                sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào
                Nhật Bản."
                  title="  1. Quy trình 5S là gì?"
                />

                <p className="font-medium text-base text-typo-black-4">
                  Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới
                  vận dụng bởi tính hiệu quả mà 5S mang lại. Quy trình này bao
                  gồm 5 chữ S đầu trong tiếng Nhật:
                </p>

                <ul className="list-disc pl-5 text-backgroundColor-green-2 text-base">
                  {fiveS.map((item, index) => (
                    <li key={index}>
                      <span className="font-bold">{item.term}</span>{" "}
                      <span className="text-typo-black-4 font-medium">
                        ({item.meaning})
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* section 2 */}
              <section id="section2" className="space-y-5">
                <SectionTitle
                  description="Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho
                mỗi bước của quy trình với mục đích cải tiến môi trường làm việc
                của doanh nghiệp."
                  title="2. Lợi ích quy trình 5S đem lại "
                />
                <p className="font-medium text-base text-typo-black-4 ">
                  Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh
                  nghiệp sẽ tạo nên một môi trường được sắp xếp theo nguyên tắc
                  logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ
                  dùng sẽ được đặt theo vị trí quy định và dễ dàng tìm kiếm khi
                  cần thiết.
                </p>

                <p className="font-medium text-base text-typo-black-4 ">
                  Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra
                  thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp phần vào
                  tạo nên một văn hóa doanh nghiệp tích cực.
                </p>
                <ImageBlog
                  src="/images/blogCard2.png"
                  subtitle="Tại sao doanh nghiệp cần quy trình 5S?"
                />
              </section>

              {/* section 3 */}
              <section id="section3" className="space-y-5">
                <SectionTitle
                  description="Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp
                trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng
                minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các
                lý do vì sao bạn nên lựa chọn quy trình: "
                  title="3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?"
                />

                <SectionTitle
                  description=" Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn
                gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian làm
                việc hiệu quả cho từng cá nhân trong doanh nghiệp. "
                  title=" 3.1 Cải thiện rõ nét môi trường làm việc"
                  classNameTitle="text-base font-bold mb-0"
                  classNameDes=""
                />

                <SectionTitle
                  description="Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được
                thời gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ
                dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ
                đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng. "
                  title="  3.2 Tiết kiệm thời gian đáng kể"
                  classNameTitle="text-base font-bold mb-0"
                  classNameDes=""
                />

                <SectionTitle
                  description="Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết,
                tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm
                và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm
                thời gian và tăng năng suất làm việc. "
                  title="3.3 Tăng năng suất làm việc"
                  classNameTitle="text-base font-bold mb-0"
                  classNameDes=""
                />
                <SectionTitle
                  description="Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và
                sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu
                chi phí vận hành đáng kể cho doanh nghiệp của mình."
                  title="3.4 Tiết kiệm chi phí"
                  classNameTitle="text-base font-bold mb-0"
                  classNameDes=""
                />

                <SectionTitle
                  description="5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ
                đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản
                xuất không mong muốn."
                  title="3.5 Tăng chất lượng sản phẩm"
                  classNameTitle="text-base font-bold mb-0"
                  classNameDes=""
                />
                <ImageBlog
                  src="/images/blogCard3.png"
                  subtitle="Các bước thực hiện quy trình 5s"
                />
              </section>

              {/* section 4 */}
              <section id="section4" className="space-y-5">
                <SectionTitle
                  description="5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao gồm năm bước cơ bản sau: "
                  title="4. Quy trình 5S gồm các bước"
                />
                <SectionTitle
                  description="Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian."
                  title="4.1 Seiri (Ngăn nắp)"
                  classNameTitle="text-base font-bold mb-0"
                  classNameDes=""
                />
                <SectionTitle
                  description="Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng để giúp tìm kiếm và sử dụng chúng một cách dễ dàng."
                  title="4.2 Seiton (Sắp xếp)"
                  classNameTitle="text-base font-bold mb-0"
                  classNameDes=""
                />
                <SectionTitle
                  description="Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ. Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi nhân viên."
                  title="4.3 Seiso (Vệ sinh)"
                  classNameTitle="text-base font-bold mb-0"
                  classNameDes=""
                />

                <SectionTitle
                  description="Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu. "
                  title="4.4 Seiketsu (Tiêu chuẩn hóa)"
                  classNameTitle="text-base font-bold mb-0"
                  classNameDes=""
                />

                <SectionTitle
                  description="Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì tính hiệu quả của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức duy trì và tuân thủ theo quy trình. "
                  title="4.5 Shitsuke (Kỷ luật)"
                  classNameTitle="text-base font-bold mb-0"
                  classNameDes=""
                />

                <ImageBlog
                  src="/images/blogCard4.png"
                  subtitle="Các ướbc thực hiện quy trình 5s"
                />
              </section>

              {/* section 5 */}
              <section id="section5" className="space-y-5">
                <SectionTitle
                  description="Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy trình: "
                  title="5.Quy trình được thực hiện như sau:"
                />
                <SectionTitle
                  description="Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều hành và quản lý quá trình thực hiện quy trình 5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.s"
                  title="5.1 Giai đoạn chuẩn bị"
                  classNameTitle="text-base font-bold mb-0"
                  classNameDes=""
                />
                <SectionTitle
                  description="Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn."
                  title="5.2 Triển khai rộng rãi "
                  classNameTitle="text-base font-bold mb-0"
                  classNameDes=""
                />

                <SectionTitle
                  description="Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên tuyên truyền tích cực và tạo không khí hào hứng cho từng cá nhân."
                  title="5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp"
                  classNameTitle="text-base font-bold mb-0"
                  classNameDes=""
                />

                <SectionTitle
                  description="Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm kiếm sau này. "
                  title="5.4 Sàng lọc, sắp xếp và đánh giá"
                  classNameTitle="text-base font-bold mb-0"
                  classNameDes=""
                />

                <SectionTitle
                  description="Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải tiến và xem xét cần cải tiến phương diện nào hay không trong quá trình thực hiện quy trình 5S. "
                  title="5.5 Đánh giá"
                  classNameTitle="text-base font-bold mb-0"
                  classNameDes=""
                />
              </section>

              {/* section 6 */}
              <section id="section6" className="space-y-5">
                <SectionTitle
                  description="Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau. "
                  title="6.Quy trình 5S có giống với Kaizen?"
                />

                <div className="border-l-4 border-l-backgroundColor-green-2 px-[36px] py-3">
                  <p className="font-medium text-xl text-typo-gray-1 italic">
                    Về Kaizen, thì đây được xem là một triết lý cải tiến liên
                    tục trong doanh nghiệp. Phương pháp này nhằm tạo ra sự thay
                    đổi tích cực, mang tính liên tục và bền vững. 
                  </p>
                </div>

                <div className="border-l-4 border-l-backgroundColor-green-2 px-[36px] py-3">
                  <p className="font-medium text-xl text-typo-gray-1 italic">
                    Còn đối với quy tắc 5S, đây là một phương pháp quản lý và
                    cải tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch
                    sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm
                    việc. 
                  </p>
                </div>

                <p className="font-medium text-base text-typo-black-4">
                  Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và
                  quy tắc này đóng vai trò quan trọng trong việc tạo ra môi
                  trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử
                  dụng làm bước đầu tiên trong quá trình cải tiến liên tục của
                  phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các
                  hoạt động cải tiến tiếp theo. 
                </p>
              </section>

              {/* step 7 */}
              <section id="section7" className="space-y-5">
                <SectionTitle
                  description="Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ. "
                  title="7.Đối tượng nào nên áp dụng 5S?"
                />

                <p className="font-medium text-base text-typo-black-4">
                  Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động
                  phức tạp, các trang thiết bị và vật dụng phải được quản lý và
                  sử dụng hiệu quả.
                </p>

                <ImageBlog
                  src="/images/blogCard5.png"
                  subtitle="Các bước thực hiện quy trình 5s"
                />
              </section>

              {/* step 8 */}
              <section id="section8" className="space-y-5">
                <SectionTitle
                  description="Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía: "
                  title="8.Các yếu tố tạo nên thành công cho quy trình 5S"
                />

                <ul className="list-disc pl-5 text-typo-black-4 text-base">
                  <li>
                    <p>
                      Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh
                      nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định doanh
                      nghiệp có áp dụng quy tắc này hay không.
                    </p>
                  </li>
                  <li>
                    <p>
                      Chương trình, kế hoạch thực hiện quy trình: Sau khi phía
                      lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng,
                      kế hoạch thực hiện triển khai 5S. 
                    </p>
                  </li>
                  <li>
                    <p>
                      Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp
                      cần huy động và khuyến khích nhân viên tự nguyện thực hiện
                      vì lợi ích chung của tổ chức, của doanh nghiệp.
                    </p>
                  </li>
                </ul>

                <p className="font-medium text-base text-typo-black-4">
                  Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng
                  cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi
                  bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình.
                  Và với những thông tin bổ ích như trên, FOSO mong rằng phần
                  nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt
                  bậc trong tương lai.
                </p>
              </section>
            </div>

            {/* react */}
            <div className="py-12 w-full">
              <div className="rounded-3xl bg-white shadow-lg py-6 flex flex-col ">
                <h3 className="font-extrabold text-xl text-typo-gray-1 text-center">
                  Bạn thấy bài viết như thế nào?
                </h3>
                <p className="font-medium text-base text-typo-gray-1 text-center mb-6">
                  4 phản hồi
                </p>

                <div className="flex md:flex-row flex-col justify-between items-center  3xl:px-[100px] xlg:gap-x-8">
                  <ReactBlog count={1} title="Hữu ích" icon={<Like />} />
                  <ReactBlog count={2} title="Yêu thích" icon={<Heart />} />
                  <ReactBlog count={0} title="Thú vị" icon={<StarStruck />} />
                  <ReactBlog count={1} title="Bất ngờ" icon={<Hushed />} />
                  <ReactBlog count={0} title="Nhàm chán" icon={<Yawning />} />
                  <ReactBlog count={0} title="Nhàm chán" icon={<Pouting />} />
                </div>
              </div>
            </div>
          </div>

          {/* left */}
          <div className="flex-1 mdd:hidden">
            <div className="w-full max-w-md">
              {/* Nút mở dropdown */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full px-4 py-3 text-2xl text-typo-black-3 font-extrabold"
              >
                Nội Dung Bài Viết
                {isOpen ? (
                  <Collap className="text-backgroundColor-green-2" />
                ) : (
                  <Collap className="rotate-180 " />
                )}
              </button>

              {/* Nội dung dropdown */}
              {isOpen && (
                <div className="mt-2 p-4 w-full">
                  <ul className="list-none space-y-2 cursor-pointer font-medium text-lg text-typo-gray-1">
                    {content.map((section, index) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="hover:underline hover:text-backgroundColor-green-5 "
                        >
                          {index + 1}. {section.title}
                        </a>
                        {section.supTitle.length > 0 && (
                          <ul className="ml-4 font-medium text-lg text-typo-gray-1">
                            {section.supTitle.map((sub, index) => (
                              <li key={index}>
                                <a
                                  href={`#${sub.id}`}
                                  className="hover:underline hover:text-backgroundColor-green-5"
                                >
                                  {index + 1}. {sub.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-y-8">
              <CardVertical>
                <div className="flex flex-col w-full relative items-end mb-[72px]">
                  <Image
                    src="/images/card1.png"
                    alt="card"
                    height={262}
                    width={400}
                    className="mb-[72px]"
                  />

                  <Image
                    src="/images/card1-free.png"
                    alt="free"
                    height={87}
                    width={320}
                    className="mr-6"
                  />

                  <div className="absolute bottom-0 left-[34px] ">
                    <Image
                      src="/images/card1-robot.png"
                      alt="robot"
                      height={100}
                      width={100}
                    />
                  </div>
                </div>
              </CardVertical>

              <CardVertical className="bg-linear-card-vertical">
                <div className="w-full flex flex-col items-center justify-center gap-y-6 mb-6">
                  <Image
                    src="/images/group-card.png"
                    alt="group"
                    height={400}
                    width={472}
                    className="object-cover"
                  />

                  <p className="px-6 text-white text-xl font-bold text-start">
                    Gia nhập cộng đồng FMRP Việt – Kết nối, chia sẻ, cùng phát
                    triển!
                  </p>
                </div>
              </CardVertical>
            </div>
          </div>

          {/* relative */}
        </div>
        <div className="max-w-[1440px] mx-auto overflow-hidden">
          <h3 className="text-4xl font-extrabold text-typo-black-3 mb-6">
            Bài viết liên quan
          </h3>

          <div className="flex md:flex-row flex-col gap-x-8 w-full mdd:px-1">
            <BlogCard classNameImage="h-[475px]" />
            <BlogCard classNameImage="h-[475px]" />
            <BlogCard classNameImage="h-[475px]" />
          </div>
        </div>

        {/* share */}
        <div className="3xl:block hidden">
          <Social />
        </div>
      </div>
    </Main>
  );
};

export default Blog;
