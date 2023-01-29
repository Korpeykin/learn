interface ComplaintData {
  id: number;
  customer: string;
  details: string;
}

abstract class Complaints {
  complaints: ComplaintData[] = [];

  abstract reply(complaint: ComplaintData): string;

  add(complaint: ComplaintData) {
    this.complaints.push(complaint);
    return this.reply(complaint);
  }
}

class ProductComplaints extends Complaints {
  reply({ id, customer, details }: ComplaintData) {
    return `Product: ${id}: ${customer} (${details})`;
  }
}

class ServiceComplaints extends Complaints {
  reply({ id, customer, details }: ComplaintData) {
    return `Service: ${id}: ${customer} (${details})`;
  }
}

class ComplaintRegistry {
  register(customer: string, type: string, details: string) {
    const id = Date.now();

    const complaint: ProductComplaints | ServiceComplaints =
      type === "service" ? new ServiceComplaints() : new ProductComplaints();

    return complaint.add({ id, customer, details });
  }
}

const registry = new ComplaintRegistry();

console.log(registry.register("Vladilen", "service", "недоступен"));
console.log(registry.register("Elena", "product", "вылазит ошибка"));
