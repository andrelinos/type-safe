/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Live typed full-stack
 * API documentation for Fastify
 * OpenAPI spec version: 1.0.0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import type {
  CreateUser201,
  CreateUserBody,
  DeleteUser204,
  DeleteUser404,
  EditUser201,
  EditUser404,
  EditUserBody,
  GetUser200,
  GetUser404,
  GetUsers200Item
} from '../api.schemas'



/**
 * Create user
 */
export type createUserResponse = {
  data: CreateUser201;
  status: number;
  headers: Headers;
}

export const getCreateUserUrl = () => {


  return `http://localhost:3333/users`
}

export const createUser = async (createUserBody: CreateUserBody, options?: RequestInit): Promise<createUserResponse> => {
  
  const res = await fetch(getCreateUserUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      createUserBody,)
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getCreateUserMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createUser>>, TError,{data: CreateUserBody}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof createUser>>, TError,{data: CreateUserBody}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof createUser>>, {data: CreateUserBody}> = (props) => {
          const {data} = props ?? {};

          return  createUser(data,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CreateUserMutationResult = NonNullable<Awaited<ReturnType<typeof createUser>>>
    export type CreateUserMutationBody = CreateUserBody
    export type CreateUserMutationError = unknown

    export const useCreateUser = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createUser>>, TError,{data: CreateUserBody}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof createUser>>,
        TError,
        {data: CreateUserBody},
        TContext
      > => {

      const mutationOptions = getCreateUserMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * List users
 */
export type getUsersResponse = {
  data: GetUsers200Item[];
  status: number;
  headers: Headers;
}

export const getGetUsersUrl = () => {


  return `http://localhost:3333/users`
}

export const getUsers = async ( options?: RequestInit): Promise<getUsersResponse> => {
  
  const res = await fetch(getGetUsersUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getGetUsersQueryKey = () => {
    return [`http://localhost:3333/users`] as const;
    }

    
export const getGetUsersQueryOptions = <TData = Awaited<ReturnType<typeof getUsers>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUsers>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUsersQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUsers>>> = ({ signal }) => getUsers({ signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getUsers>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetUsersQueryResult = NonNullable<Awaited<ReturnType<typeof getUsers>>>
export type GetUsersQueryError = unknown


export function useGetUsers<TData = Awaited<ReturnType<typeof getUsers>>, TError = unknown>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUsers>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUsers>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetUsers<TData = Awaited<ReturnType<typeof getUsers>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUsers>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUsers>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetUsers<TData = Awaited<ReturnType<typeof getUsers>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUsers>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }

export function useGetUsers<TData = Awaited<ReturnType<typeof getUsers>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUsers>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetUsersQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Get an user
 */
export type getUserResponse = {
  data: GetUser200;
  status: number;
  headers: Headers;
}

export const getGetUserUrl = (id: string,) => {


  return `http://localhost:3333/users/${id}`
}

export const getUser = async (id: string, options?: RequestInit): Promise<getUserResponse> => {
  
  const res = await fetch(getGetUserUrl(id),
  {      
    ...options,
    method: 'GET'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}



export const getGetUserQueryKey = (id: string,) => {
    return [`http://localhost:3333/users/${id}`] as const;
    }

    
export const getGetUserQueryOptions = <TData = Awaited<ReturnType<typeof getUser>>, TError = GetUser404>(id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUserQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUser>>> = ({ signal }) => getUser(id, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetUserQueryResult = NonNullable<Awaited<ReturnType<typeof getUser>>>
export type GetUserQueryError = GetUser404


export function useGetUser<TData = Awaited<ReturnType<typeof getUser>>, TError = GetUser404>(
 id: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUser>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetUser<TData = Awaited<ReturnType<typeof getUser>>, TError = GetUser404>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUser>>,
          TError,
          TData
        > , 'initialData'
      >, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetUser<TData = Awaited<ReturnType<typeof getUser>>, TError = GetUser404>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }

export function useGetUser<TData = Awaited<ReturnType<typeof getUser>>, TError = GetUser404>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData>>, fetch?: RequestInit}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetUserQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Get an user
 */
export type editUserResponse = {
  data: EditUser201;
  status: number;
  headers: Headers;
}

export const getEditUserUrl = (id: string,) => {


  return `http://localhost:3333/users/${id}`
}

export const editUser = async (id: string,
    editUserBody: EditUserBody, options?: RequestInit): Promise<editUserResponse> => {
  
  const res = await fetch(getEditUserUrl(id),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      editUserBody,)
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getEditUserMutationOptions = <TError = EditUser404,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof editUser>>, TError,{id: string;data: EditUserBody}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof editUser>>, TError,{id: string;data: EditUserBody}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof editUser>>, {id: string;data: EditUserBody}> = (props) => {
          const {id,data} = props ?? {};

          return  editUser(id,data,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type EditUserMutationResult = NonNullable<Awaited<ReturnType<typeof editUser>>>
    export type EditUserMutationBody = EditUserBody
    export type EditUserMutationError = EditUser404

    export const useEditUser = <TError = EditUser404,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof editUser>>, TError,{id: string;data: EditUserBody}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof editUser>>,
        TError,
        {id: string;data: EditUserBody},
        TContext
      > => {

      const mutationOptions = getEditUserMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Get an user
 */
export type deleteUserResponse = {
  data: DeleteUser204;
  status: number;
  headers: Headers;
}

export const getDeleteUserUrl = (id: string,) => {


  return `http://localhost:3333/users/${id}`
}

export const deleteUser = async (id: string, options?: RequestInit): Promise<deleteUserResponse> => {
  
  const res = await fetch(getDeleteUserUrl(id),
  {      
    ...options,
    method: 'DELETE'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}




export const getDeleteUserMutationOptions = <TError = DeleteUser404,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteUser>>, TError,{id: string}, TContext>, fetch?: RequestInit}
): UseMutationOptions<Awaited<ReturnType<typeof deleteUser>>, TError,{id: string}, TContext> => {
const {mutation: mutationOptions, fetch: fetchOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteUser>>, {id: string}> = (props) => {
          const {id} = props ?? {};

          return  deleteUser(id,fetchOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteUserMutationResult = NonNullable<Awaited<ReturnType<typeof deleteUser>>>
    
    export type DeleteUserMutationError = DeleteUser404

    export const useDeleteUser = <TError = DeleteUser404,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteUser>>, TError,{id: string}, TContext>, fetch?: RequestInit}
): UseMutationResult<
        Awaited<ReturnType<typeof deleteUser>>,
        TError,
        {id: string},
        TContext
      > => {

      const mutationOptions = getDeleteUserMutationOptions(options);

      return useMutation(mutationOptions);
    }
    