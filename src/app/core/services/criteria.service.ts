import { Injectable } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class CriteriaService {
  constructor() {}

  buildTableQuery(data: LazyLoadEvent) {
    const filter = [];
    for (const [key, filterData] of Object.entries(data.filters ?? {})) {
      const data = filterData as any;
      if (data.value === null || data.value === '') continue;
      filter.push({
        field: key,
        operator: data.matchMode,
        value: data.value,
      });
    }
    return {
      per_page: data.rows ?? 15,
      page: (data.first ?? 1) / (data.rows ?? 1) + 1,
      sort_by: data.sortField ?? 'id',
      sort_order: data.sortOrder === -1 ? 'desc' : 'asc',
      filter: JSON.stringify(filter),
    };
  }
}
