import { Injectable } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root',
})
export class CriteriaService {
  constructor() {}

  buildTableQuery(data: LazyLoadEvent) {
    const filter: { [key: string]: any } = {};
    for (const [key, filterData] of Object.entries(data.filters ?? {})) {
      const data = filterData as any;
      if (data.value === null || data.value === '') continue;
      filter[key] = data.value;
    }

    const params: { [key: string]: any } = {
      per_page: data.rows ?? 15,
      page: (data.first ?? 1) / (data.rows ?? 1) + 1,
      ...(Object.keys(filter).length !== 0 && { filter: filter }),
      ...(data.sortField && { sort: (data.sortOrder === -1 ? '-' : '') + data.sortField ?? 'id' }),
    };

    return qs.stringify(params, { encode: false });
  }
}
