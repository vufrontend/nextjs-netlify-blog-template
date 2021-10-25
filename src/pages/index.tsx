import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div className="content">
          <h1>
					Để có thể tận hưởng niềm vui một cách trọn vẹn, bạn phải có ai đó để cùng sẻ chia niềm vui đó<span className="fancy">.</span>
          </h1>
          <span className="handle">-Mark Twain-</span>
          <h4>Chào mừng bạn đến với Loda9, cộng đồng lập trình viên hàng đầu thành phố Hồ Chí Minh.</h4>
          {/* <SocialList /> */}
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
				.content {
					max-width: 40%;
				}
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h4 {
          font-size: 1.4 rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
