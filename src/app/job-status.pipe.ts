import { Pipe, PipeTransform } from "@angular/core";

const JobStatus = new Map<number, string>();

JobStatus.set(0, "Sẵn Sàng");
JobStatus.set(1, "Đang Chạy");
JobStatus.set(20, "Đã Hủy");
JobStatus.set(21, "Xong");
JobStatus.set(23, "Bị Đơ");
JobStatus.set(24, "Quá lần thử lại");
JobStatus.set(2, "Thất Bại");

@Pipe({ name: "JobStatus" })
export class JobStatusPipe implements PipeTransform {
  transform(value?: number) {
    return JobStatus.get(value as number) || value;
  }
}