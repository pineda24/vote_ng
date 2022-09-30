import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DataService {
  isMenuCollapsed: boolean = false;

  constructor(private http: HttpClient) {}

  find(collection: String) {
    return this.http.get<any>(environment.serverBaseURL + collection + '/');
  }

  findByParams(collection: String, params: String) {
    return this.http.get<any>(
      environment.serverBaseURL + collection + '/' + params
    );
  }

  findByIdCollection(collection: String, params: String) {
    return this.http.get<any>(
      environment.serverBaseURL + collection + '?' + params
    );
  }

  findByFilter(collection: String, params: any) {
    return this.http.post<any>(
      environment.serverBaseURL + collection + '?',
      params
    );
  }

  fileSend(collection: String, params: any) {
    return this.http.post<any>(
      environment.serverBaseURL + collection,
      params
    );
  }

  findOverduePayments(params: any) {
    return this.http.post<any>(
      environment.serverBaseURL +
        environment.api +
        '/users/findOverduePayments?',
      params
    );
  }

  getFilteredUserCount(params: any) {
    return this.http.post<any>(
      environment.serverBaseURL +
        environment.api +
        '/users/getFilteredUserCount?',
      params
    );
  }

  findMultipleLastPayments(params: any) {
    return this.http.post<any>(
      environment.serverBaseURL +
        environment.api +
        '/payments/findMultipleLastPayments?',
      params
    );
  }

  getPaymentByInvoice(query: Number) {
    return this.http.get<any>(
      environment.serverBaseURL +
        environment.api +
        '/payments/getPaymentByInvoice?invoice=' +
        query
    );
  }

  getPaymentsFiltered(params: any) {
    return this.http.post<any>(
      environment.serverBaseURL +
        environment.api +
        '/payments/getPaymentsFiltered?',
      params
    );
  }

  findPayments(params: any) {
    return this.http.post<any>(
      environment.serverBaseURL + environment.api + '/payments/findPayments?',
      params
    );
  }

  findBy(collection: String, query: URLSearchParams) {
    return this.http.get<any>(
      environment.serverBaseURL + environment.api + collection + '?' + query
    );
  }

  findById(collection: String, id: String) {
    return this.http.get<any>(
      environment.serverBaseURL + collection + '/' + id
    );
  }

  insertOne(collection: String, obj: any) {
    return this.http.post(
      environment.serverBaseURL + collection + '/',
      obj
    );
  }

  insertMany(collection: String, list: Array<any>) {
    return this.http.post(
      environment.serverBaseURL + environment.api + collection + '/',
      list
    );
  }

  updateOne(collection: String, obj: any) {
    return this.http.patch(
      environment.serverBaseURL + collection + '/',
      obj
    );
  }

  updateMany(collection: String, obj: String) {
    return this.http.put(
      environment.serverBaseURL + collection + '/',
      obj
    );
  }

  deleteOne(collection: String, id: String) {
    return this.http.delete(
      environment.serverBaseURL + collection + '/' + id
    );
  }

  deleteMany(collection: String, obj: String) {
    return this.http.delete(
      environment.serverBaseURL + environment.api + collection + '/' + obj
    );
  }

  //   insertOneFile(collection, fileToUpload: File) {
  //     const formData: FormData = new FormData();
  //     formData.append('file', fileToUpload, fileToUpload.name);
  //     return this.http.post(environment.serverBaseURL + environment.api + collection + "/", formData);
  //   }

  count(collection: String) {
    return this.http.get<any>(
      environment.serverBaseURL + environment.api + collection + '/'
    );
  }

  countWithParams(collection: String, params: String) {
    return this.http.get<any>(
      environment.serverBaseURL + environment.api + collection + '?' + params
    );
  }
}
