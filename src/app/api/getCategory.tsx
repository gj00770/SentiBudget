import axios from "axios";

type ClassificationSuccess = {
  sequence: string;
  labels: string[];
  scores: number[];
};

type ClassificationError = {
  error: string;
};

type ClassificationResult = ClassificationSuccess | ClassificationError;

const classifyProduct = async (
  productDescription: string
): Promise<ClassificationResult> => {
  const API_URL =
    "https://api-inference.huggingface.co/models/joeddav/xlm-roberta-large-xnli";
  try {
    const response = await axios.post(
      API_URL,
      {
        inputs: productDescription, // 사용자 입력값
        parameters: {
          candidate_labels: ["의류", "가구", "책", "가전", "식비", "음식"],
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data);
    return response.data; // API 응답 반환
  } catch (error: unknown) {
    // 에러가 AxiosError 타입인지 확인
    if (axios.isAxiosError(error)) {
      return {
        error: error.response?.data?.error || "API request failed",
      } as ClassificationError;
    }
    // AxiosError가 아닌 경우에 대한 처리
    return {
      error: "An unexpected error occurred",
    } as ClassificationError;
  }
};

export default classifyProduct;
