class Remark {
  private remark: any;

  constructor() {
    // @ts-ignore
    this.remark = window.remark;
  }

  create(config: {}): any {
    return this.remark.create(config);
  }
}

export const remark = new Remark();
