import { Dispatch, SetStateAction } from "react";

interface ModalProps {
  setIsShow: Dispatch<SetStateAction<boolean>>;
}

function Modal(props: ModalProps) {
  const { setIsShow } = props;
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="sm:max-w-[600px]"></div>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="flex items-center justify-between border-b pb-4">
                <h2 className="text-lg font-medium">공모주 상세정보</h2>
              </div>
              <div className="py-6">
                <div className="grid gap-5">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base font-bold">종목명</h3>
                    <p className="text-sm">아이빔테크놀러지</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base font-bold">공모주 일정</h3>
                    <p className="text-sm">2024.07.25 ~ 2024.08.25</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base font-bold">확정 공모가</h3>
                    <p className="text-sm">-</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base font-bold">희망공모가</h3>
                    <p className="text-sm">7,300 ~ 8,500</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base font-bold">청약경쟁률</h3>
                    <p className="text-sm">-</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base font-bold">주간사</h3>
                    <p className="text-sm">삼성증권</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                onClick={() => setIsShow(false)}
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
