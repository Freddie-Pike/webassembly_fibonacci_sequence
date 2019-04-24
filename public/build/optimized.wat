(module
 (type $FUNCSIG$ii (func (param i32) (result i32)))
 (type $FUNCSIG$v (func))
 (memory $0 0)
 (table $0 1 funcref)
 (elem (i32.const 0) $null)
 (export "memory" (memory $0))
 (export "table" (table $0))
 (export "wasmRecursiveFib" (func $assembly/index/wasmRecursiveFib))
 (func $assembly/index/wasmRecursiveFib (; 0 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  block $case2|0
   block $case1|0
    local.get $0
    local.tee $1
    if
     local.get $1
     i32.const 1
     i32.eq
     br_if $case1|0
     br $case2|0
    end
    i32.const 1
    return
   end
   i32.const 1
   return
  end
  local.get $0
  i32.const 1
  i32.sub
  call $assembly/index/wasmRecursiveFib
  local.get $0
  i32.const 2
  i32.sub
  call $assembly/index/wasmRecursiveFib
  i32.add
 )
 (func $null (; 1 ;) (type $FUNCSIG$v)
  nop
 )
)
